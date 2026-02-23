import { useState } from "react";
import AddNewNotes from "./components/AddNewNotes";
import NoteList from "./components/NoteList";
import NoteHeader from "./NoteHeader";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  const [sort, setSort] = useState("latest");

  return (
    <div className="mx-auto max-w-[1200px] ">
      <ContextProvider>
        <NoteHeader sort={sort} onSort={(e) => setSort(e.target.value)} />
        <div className="flex  mt-10">
          <AddNewNotes />
          <NoteList sort={sort} />
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
