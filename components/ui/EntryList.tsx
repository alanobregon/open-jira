import { FC, useContext, useMemo, DragEvent } from "react";

import List from "@mui/material/List";
import Paper from "@mui/material/Paper";

import { EntryCard } from "./EntryCard";
import { UIContext } from "../../context/ui";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";

import styles from "../../styles/EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = (props) => {
  const { status } = props;
  const { entries } = useContext(EntriesContext);
  const { isDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    console.log({id});
  }

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ""}>
      <Paper 
        elevation={0}
        sx={{ 
          height: "calc(100vh - 250px)", 
          overflow: "auto",
          backgroundColor: "transparent",
        }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s"}}>
          { entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
