import { UIState } from "./";

type UIActionType = 
| { type: "UI_OPEN_SIDEBAR" }
| { type: "UI_CLOSE_SIDEBAR" }
| { type: "UI_OPEN_ENTRIES_MODAL"}
| { type: "UI_CLOSE_ENTRIES_MODAL"}
| { type: "UI_START_DRAGGING"}
| { type: "UI_END_DRAGGING"}

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
    case "UI_START_DRAGGING": 
      return {
        ...state,
        isDragging: true,
      }
    case "UI_END_DRAGGING": 
      return {
        ...state,
        isDragging: false,
      }
    default:
      return { ...state }
  }
}