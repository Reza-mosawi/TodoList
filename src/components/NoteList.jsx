// import { useState } from "react";

import { useNote, useNoteDispatch } from "../context/ContextProvider";

// import { useContext } from "react";
// import { NoteContext, NoteDispatchContext } from "../context/ContextProvider";

function NoteList({ sort }) {
  // const note = useContext(NoteContext);
  const note = useNote();
  let sortList = note;
  if (sort == "earliast") {
    sortList = [...note].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    );
  }
  if (sort == "latest") {
    sortList = [...note].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  }

  if (sort == "completed") {
    sortList = [...note].sort(
      (a, b) => Number(a.completed) - Number(b.completed),
    );
  }
  const noteAll = note.length;
  const noteCompleted = note.filter((n) => n.completed).length;

  const open = noteAll - noteCompleted;

  return (
    <div className="w-2/3   ">
      {/* div header note */}

      {noteAll <= 0 ? (
        <h1 className="font-bold text-2xl  text-gray-700 mx-0 text-center">
          هیچ یادداشتی وجود ندارد!
        </h1>
      ) : (
        <HeaderNoteList
          noteAll={noteAll}
          noteCompleted={noteCompleted}
          open={open}
        />
      )}

      {sortList.map((notes) => (
        <NoteItem notes={notes} key={notes.id} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ notes }) {
  // const dispatch = useContext(NoteDispatchContext);
  const dispatch = useNoteDispatch();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="bg-white rounded-2xl p-5 mt-10  ">
      {/* div p button */}
      <div
        className={`flex justify-between items-center border-b border-b-gray-400/20 pb-5 ${
          notes.completed ? "completed" : ""
        }`}
      >
        <div>
          <p className="font-bold text-gray-700 text-xl pb-5">{notes.title}</p>
          <p className="text-gray-500 text-base">{notes.desc}</p>
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <button
            className="cursor-pointer"
            onClick={() =>
              dispatch({ type: "deleteNote", payload: Number(notes.id) })
            }
          >
            <span className="text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </button>
          <input
            checked={notes.completed}
            type="checkbox"
            className="inline-block w-4 h-4 cursor-pointer"
            value={notes.id}
            onChange={(e) =>
              dispatch({
                type: "completedNote",
                payload: Number(e.target.value),
              })
            }
          />
        </div>
      </div>
      {/* div header note footer */}
      <div className="flex items-center justify-center mt-5">
        <p className="text-gray-400">
          {new Date(notes.createdAt).toLocaleString("en-US", options)}
        </p>
      </div>
    </div>
  );
}

function HeaderNoteList({ noteAll, noteCompleted, open }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">
        All{" "}
        <span className="bg-gray-400 text-gray-100 px-1 rounded-full">
          {noteAll}
        </span>
      </span>
      <span className="text-gray-400">
        completed{" "}
        <span className="bg-gray-400 text-gray-100 px-1 rounded-full">
          {noteCompleted}
        </span>
      </span>
      <span className="text-gray-400">
        Open{" "}
        <span className="bg-gray-400 text-gray-100 px-1 rounded-full">
          {open}
        </span>
      </span>
    </div>
  );
}
