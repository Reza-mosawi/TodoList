// import { useContext } from "react";
// import { NoteContext } from "./context/ContextProvider";

import { useNote } from "./context/ContextProvider";

function NoteHeader({ sort, onSort }) {
  // const note = useContext(NoteContext);
  const note = useNote();
  return (
    <div className="flex items-center justify-evenly mt-10 pb-10 border-b border-gray-500">
      <div>
        <h1 className="font-bold text-5xl text-gray-700 font-danaBold">
          یادداشت ها ( {note.length} )
        </h1>
      </div>
      <div>
        <select
          className="inline-block min-w-[250px] px-4 py-2 border border-gray-500 rounded-xl bg-white font-dana"
          value={sort}
          onChange={onSort}
        >
          <option value={"latest"}>مرتب کردن بر اساس آخرین یادداشت ها</option>
          <option value={"earliast"}>مرتب کردن بر اساس اولین یادداشت ها</option>
          <option value={"completed"}>
            مرتب کردن بر اساس یادداشت های تکمیل شده
          </option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
