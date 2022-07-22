import { InboxOutlined, MailOutline } from "@mui/icons-material";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

const items: string[] = [
  "Inbox",
  "Starred",
  "Send email",
  "Drafts",
];

export const Sidebar = () => {
  return (
    <Drawer 
      anchor="left" 
      open={true} 
      onClose={
        () => console.log("Cerrando")
    }>
      <Box sx={{ width: 300 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography 
            variant="h4" 
            children={`Menu`} 
          />
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
