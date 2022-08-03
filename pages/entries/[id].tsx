import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { dbEntries } from "../../database";
import { capitalize } from "@mui/material";
import { Layout } from "../../components/layouts";
import { EntryStatus, Entry } from "../../interfaces";
import { EntriesContext } from '../../context/entries';
import { ChangeEvent, useState, useMemo, FC, useContext } from "react";


import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import CancelOutlined from "@mui/icons-material/CancelOutlined";

import "moment/locale/es-mx";
import moment from "moment";


const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry
}

const EntryPage: FC<Props> = (props) => {
  const { entry } = props;
  const router = useRouter();

  const { updateEntry } = useContext(EntriesContext)

  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const getDiffHour = (time: number): string => {
    return moment(time).fromNow();
  }

  const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  }

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      description: inputValue,
      status,
    }

    updateEntry(updatedEntry);
    router.push("/");
  }

  return (
    <Layout title={`${inputValue.substring(0, 20)} ...`}>
      <Grid justifyContent={`center`} container sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card sx={{ paddingBottom: 2 }}>
            <CardHeader
              title={inputValue}
              subheader={`Creada ${getDiffHour(entry.createdAt)}`}
            />

            <CardContent>
              <TextField
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid }
                sx={{ marginTop: 2, marginBottom: 3 }}
                onBlur={() => setTouched(true)}
                placeholder={`Nueva entrada `}
                onChange={onInputValueChange}
                label={`Nueva entrada`}
                value={inputValue}
                fullWidth
                autoFocus
                multiline
              />

              <FormControl>
                <FormLabel focused={false}>Estado</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  { validStatus.map(option => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions sx={{ paddingX: 2 }}>
              <Button
                onClick={() => router.push("/")}
                startIcon={<CancelOutlined />}
                variant={`outlined`}
                color={`error`}
                size={`large`}
                fullWidth
              >
                Cancelar
              </Button>
              <Button
                disabled={inputValue.length <= 0 }
                startIcon={<SaveOutlined />}
                variant={`contained`}
                onClick={onSave}
                size={`large`}
                fullWidth
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        backgroundColor: "error.dark"
      }}>
        <DeleteOutline />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const entry = await dbEntries.getEntryById(id)
  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }

  return {
    props: { entry }
  }
}

export default EntryPage;
