import { UIState } from "./";

type UIActionType = 
| { type: "UI_OPEN_SIDEBAR" }
| { type: "UI_CLOSE_SIDEBAR" }

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI_OPEN_SIDEBAR":
      return {
        ...state,
        sidebarOpen: true,
      }
    case "UI_CLOSE_SIDEBAR":
      return {
        ...state,
        sidebarOpen: false,
      }
    default:
      return { ...state }
  }
}