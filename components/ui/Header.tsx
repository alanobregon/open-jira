import { useContext } from "react";
import { UIContext } from "../../context/ui";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuOutlined from "@mui/icons-material/MenuOutlined";

export const Header = () => {
  const {openSidebar} = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSidebar}>
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6">
          Open Jira
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
