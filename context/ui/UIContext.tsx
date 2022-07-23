import { createContext } from "react";

interface ContextProps {
  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);