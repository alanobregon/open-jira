import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import { EntryCard } from "./EntryCard";

export const EntryList = () => {
  return (
    <div>
      <Paper 
        elevation={0}
        sx={{ 
          height: "calc(100vh - 250px)", 
          overflow: "auto",
          backgroundColor: "transparent"
        }}>
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  )
}
