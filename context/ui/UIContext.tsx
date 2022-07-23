import { createContext } from "react";

interface ContextProps {
  sidebarOpen: boolean;
  openSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);