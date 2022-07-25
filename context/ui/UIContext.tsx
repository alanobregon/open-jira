import { createContext } from "react";

interface ContextProps {
  sidebarOpen: boolean;
  entriesModal: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openEntriesModal: () => void;
  closeEntriesModal: () => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);