import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType = 
| { type: "ENTRIES_ADD_ENTRY", payload: Entry }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case "ENTRIES_ADD_ENTRY":
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    default:
      return { ...state }
  }
}