import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { FC, ReactNode, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(), 
      description: "Pendiente: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, corporis!", 
      createdAt: Date.now(), 
      status: "pending" 
    },
    {
      _id: uuidv4(), 
      description: "En progreso: Laboris et anim quis nostrud non veniam Lorem sit consequat.", 
      createdAt: Date.now() - 1000000, 
      status: "in-progress" 
    },
    {
      _id: uuidv4(), 
      description: "Finalizada: Velit eu deserunt commodo sunt ullamco officia commodo sunt excepteur.", 
      createdAt: Date.now() - 100000, 
      status: "finished" 
    },
  ],
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
