import { FC, ReactNode, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./";

export interface EntriesState {
  entries: [];
}

const UI_INITIAL_STATE: EntriesState = {
  entries: [],
}

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(EntriesReducer, UI_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{
      ...state
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
