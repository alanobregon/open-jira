import { EntriesState } from "./";

type EntriesActionType = 
| { type: "ENTRIES_ACTION_NAME" }

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    // case "ENTRIES_ACTION_NAME":
    //   return {
    //     ...state,
    //   }
    default:
      return { ...state }
  }
}