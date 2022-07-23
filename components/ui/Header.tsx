import { useContext } from "react";
import { UIContext } from "../../context/ui"
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

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
