import { useContext } from "react";
import { UIContext } from "../../context/ui";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import SaveOutlined from "@mui/icons-material/SaveOutlined";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

export const NewEntry = () => {
  const { entriesModal, closeEntriesModal } = useContext(UIContext);

  return (
    <>
      {entriesModal && (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
          <TextField 
            sx={{ marginTop: 2, marginBottom: 1 }} 
            helperText={`Ingrese un valor`}
            label={`Nueva entrada`} 
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
            <Button fullWidth variant="contained" endIcon={<SaveOutlined />}>
              Guardar
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}
