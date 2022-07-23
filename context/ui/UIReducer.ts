import { UIState } from "./";

type UIActionType = 
| { type: "UI_OPEN_SIDEBAR" }
| { type: "UI_CLOSE_SIDEBAR" }
| { type: "UI_OPEN_ENTRIES_MODAL"}
| { type: "UI_CLOSE_ENTRIES_MODAL"}

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
    case "UI_OPEN_ENTRIES_MODAL":
      return {
        ...state,
        entriesModal: true,
      }
    case "UI_CLOSE_ENTRIES_MODAL":
      return {
        ...state,
        entriesModal: false,
      }
    default:
      return { ...state }
  }
}