import { createContext } from "react";

interface ContextProps {
  sidebarOpen: boolean;
}

export const UIContext = createContext({} as ContextProps);