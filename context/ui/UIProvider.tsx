import { UIContext, UIReducer } from "./";
import { FC, ReactNode, useReducer } from "react";

export interface UIState {
  sidebarOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false,
}

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{
      sidebarOpen: false
    }}>

    </UIContext.Provider>
  )
}
