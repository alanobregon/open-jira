import { FC, useContext, useMemo } from "react";

import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

import { EntryCard } from "./EntryCard";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = (props) => {
  const { status } = props;
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

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
          { entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
