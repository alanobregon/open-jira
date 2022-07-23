import { InboxOutlined, MailOutline } from "@mui/icons-material";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useContext } from "react";
import { UIContext } from "../../context/ui";

const items: string[] = [
  "Inbox",
  "Starred",
  "Send email",
  "Drafts",
];

export const Sidebar = () => {
  const { sidebarOpen } = useContext(UIContext)
  return (
    <Drawer 
      anchor="left" 
      open={sidebarOpen} 
      onClose={
        () => console.log("Cerrando")
    }>
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
