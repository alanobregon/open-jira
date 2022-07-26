import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { FC, ReactNode, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending"
    }

    dispatch({ type: "ENTRIES_ADD_ENTRY", payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "ENTRIES_UPDATE_ENTRY", payload: entry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addEntry,
      updateEntry,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
