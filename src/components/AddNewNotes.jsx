import { useRef, useState } from "react";
// import { NoteDispatchContext } from "../context/ContextProvider";

import { useNoteDispatch } from "../context/ContextProvider";

function AddNewNotes() {
  // const dispatch = useContext(NoteDispatchContext);
  const dispatch = useNoteDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return null;
    const NewNote = {
      title,
      desc,
      completed: false,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "addNote", payload: NewNote });
    setTitle("");
    setDesc("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      descRef.current.focus();
    }
  };

  return (
    <form className="flex flex-col gap-4   w-1/3" onSubmit={handleSubmit}>
      <div className="flex justify-center w-64">
        <h2 className="font-danaBold text-2xl  text-gray-700">
          اضافه کردن یادداشت
        </h2>
      </div>
      <input
        type="text "
        placeholder="عنوان..."
        className="rounded-[4px] bg-white  w-64 h-11 px-3 border-none outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
        onKeyDown={handleKeyDown}
      />
      <input
        ref={descRef}
        type="text"
        placeholder="توضیحات..."
        className="rounded-[4px] bg-white  w-64 h-11 px-3 border-none outline-none"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        className=" text-white bg-indigo-700 rounded-[4px]  w-64 text-center h-11 cursor-pointer font-dana"
        type="submit"
      >
        اضافه کردن
      </button>
    </form>
  );
}

export default AddNewNotes;
