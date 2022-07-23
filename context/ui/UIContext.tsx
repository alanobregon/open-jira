import { createContext } from "react";

interface ContextProps {
  sidebarOpen: boolean;
  entriesModal: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openEntriesModal: () => void;
  closeEntriesModal: () => void;
}

export const UIContext = createContext({} as ContextProps);