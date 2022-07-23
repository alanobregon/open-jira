import { UIContext, UIReducer } from "./";
import { FC, ReactNode, useReducer } from "react";

export interface UIState {
  sidebarOpen: boolean;
  entriesModal: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false,
  entriesModal: false
}

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: "UI_OPEN_SIDEBAR" });
  }

  const closeSidebar = () => {
    dispatch({ type: "UI_CLOSE_SIDEBAR" });
  }

  const openEntriesModal = () => {
    dispatch({ type: "UI_OPEN_ENTRIES_MODAL" });
  }

  const closeEntriesModal = () => {
    dispatch({ type: "UI_CLOSE_ENTRIES_MODAL"});
  }

  return (
    <UIContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar,
      openEntriesModal,
      closeEntriesModal
    }}>
      { children }
    </UIContext.Provider>
  )
}
