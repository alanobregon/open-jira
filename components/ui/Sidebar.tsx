import { useContext } from "react";
import { UIContext } from "../../context/ui";

import InboxOutlined from "@mui/icons-material/InboxOutlined";
import MailOutline from "@mui/icons-material/MailOutline";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const items: string[] = [
  "Inbox",
  "Starred",
  "Send email",
  "Drafts",
];

export const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useContext(UIContext)
  return (
    <Drawer 
      anchor="left" 
      open={sidebarOpen}
      onClose={closeSidebar}
    >
      <Box sx={{ width: 300 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">
            Menu
          </Typography>
        </Box>

        <List>
          { items && items.map((text, index) => (
            <ListItem key={text} button>
              <ListItemIcon>
                { index % 2 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          { items && items.map((text, index) => (
            <ListItem key={text} button>
              <ListItemIcon>
                { index % 2 ? <InboxOutlined /> : <MailOutline />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
