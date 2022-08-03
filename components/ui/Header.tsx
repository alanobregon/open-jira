import NextLink from "next/link";
import { useContext } from "react";
import { UIContext } from "../../context/ui";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuOutlined from "@mui/icons-material/MenuOutlined";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

export const Header = () => {
  const {openSidebar, openEntriesModal} = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSidebar}>
          <MenuOutlined />
        </IconButton>
        <NextLink href={`/`} passHref>
          <Link underline="none" sx={{ flexGrow: 1, color: "white" }}>
            <Typography variant="h6">
              Open Jira
            </Typography>
          </Link>
        </NextLink>
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
