import { createContext, useContext, useEffect, useReducer } from "react";

const NoteContext = createContext();
const NoteDispatchContext = createContext();
export function ContextProvider({ children }) {
  /////////////////////////////////
  function init() {
    const noteinit = JSON.parse(localStorage.getItem("NOTE"));
    return noteinit ? noteinit : [];
  }
  //////////////////////////////////////////////////
  function noteReducer(state, action) {
    switch (action.type) {
      case "addNote": {
        return [...state, action.payload];
      }
      case "deleteNote": {
        return state.filter((e) => e.id !== action.payload);
      }
      case "completedNote": {
        return state.map((note) =>
          note.id === action.payload
            ? { ...note, completed: !note.completed }
            : note,
        );
      }
      // default:
      //   return state;
    }
  }
  //////////////////////////////////
  const [note, dispatch] = useReducer(noteReducer, [], init);
  useEffect(() => {
    localStorage.setItem("NOTE", JSON.stringify(note));
  }, [note]);
  return (
    <NoteContext.Provider value={note}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
}

export function useNote() {
  const note = useContext(NoteContext);
  return note;
}
export function useNoteDispatch() {
  const dispatch = useContext(NoteDispatchContext);
  return dispatch;
}
