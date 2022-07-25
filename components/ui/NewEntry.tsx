import { ChangeEvent, useContext, useState } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

export const NewEntry = () => {
  const [touched, setTouched] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { addEntry } = useContext(EntriesContext);
  const { entriesModal, closeEntriesModal } = useContext(UIContext);


  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onSave = () => {
    if (inputValue.length === 0) return;

    addEntry(inputValue);
    setInputValue("");
    setTouched(false);
    closeEntriesModal();
  }

  return (
    <>
      {entriesModal && (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
          <TextField 
            helperText={inputValue.length <= 0 && touched && `Ingrese un valor`}
            error={inputValue.length <= 0 && touched}
            sx={{ marginTop: 2, marginBottom: 1 }}
            onBlur={() => setTouched(true)}
            onChange={onInputChange}
            label={`Nueva entrada`} 
            value={inputValue}
            fullWidth 
            multiline 
          />
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 2 }}>
            <Button
              onClick={closeEntriesModal}
              endIcon={<DeleteOutline />}
              variant="outlined" 
              color={`error`}
              fullWidth 
            >
              Cancelar
            </Button>
            <Button 
              endIcon={<SaveOutlined />}
              variant="contained" 
              onClick={onSave}
              fullWidth 
            >
              Guardar
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}
