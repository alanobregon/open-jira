import { Entry } from "../../interfaces";
import { EntriesContext, EntriesReducer } from "./";
import { FC, ReactNode, useReducer, useEffect } from "react";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = async (description: string) => {

    const data: Entry = await fetch("/api/entries", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
    }).then(async (response) => await response.json())
      .catch(err => console.error(err));

    dispatch({ type: "ENTRIES_ADD_ENTRY", payload: data })
  }

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const data: Entry = await fetch(`/api/entries/${_id}`, {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, status })
      }).then(async (response) => await response.json())
        .catch(err => console.error(err));

      dispatch({ type: "ENTRIES_UPDATE_ENTRY", payload: data })
    } catch (error) {
      console.log(error);
    }
  }

  const refreshEntries = async () => {
    const data: Entry[] = await fetch("/api/entries")
      .then(async (res) => await res.json())
      .catch((e) => console.error(e));

    dispatch({ type: "ENTRIES_FIRST_LOAD", payload: data })
  }

  useEffect(() => {
    refreshEntries();
  }, [])
  

  return (
    <EntriesContext.Provider value={{
      ...state,
      addEntry,
      updateEntry,
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
