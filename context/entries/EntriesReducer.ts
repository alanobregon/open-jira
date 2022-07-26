import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType = 
| { type: "ENTRIES_ADD_ENTRY", payload: Entry }
| { type: "ENTRIES_FIRST_LOAD", payload: Entry[] }
| { type: "ENTRIES_UPDATE_ENTRY", payload: Entry }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case "ENTRIES_ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case "ENTRIES_FIRST_LOAD":
      return {
        ...state,
        entries: [...action.payload]
      }
    case "ENTRIES_UPDATE_ENTRY":
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        })
      }
    default:
      return { ...state }
  }
}