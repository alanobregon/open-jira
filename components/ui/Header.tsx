import { useContext } from "react";
import { UIContext } from "../../context/ui";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuOutlined from "@mui/icons-material/MenuOutlined";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

export const Header = () => {
  const {openSidebar, openEntriesModal} = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSidebar}>
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Open Jira
        </Typography>
        <Button
          size="medium" 
          color="inherit" 
          startIcon={<AddCircleOutline />}
          onClick={openEntriesModal}
        >
          Agregar tarea
        </Button>
      </Toolbar>
    </AppBar>
  )
}
