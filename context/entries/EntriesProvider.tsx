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
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, corporis!", 
      createdAt: Date.now(), 
      status: "pending" 
    },
    {
      _id: uuidv4(), 
      description: "Laboris et anim quis nostrud non veniam Lorem sit consequat.", 
      createdAt: Date.now() - 1000000, 
      status: "in-progress" 
    },
    {
      _id: uuidv4(), 
      description: "Velit eu deserunt commodo sunt ullamco officia commodo sunt excepteur.", 
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

  return (
    <EntriesContext.Provider value={{
      ...state
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
