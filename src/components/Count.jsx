import { useReducer, useState } from "react";

function Count() {
  const initialValue = 0;
  function countReducer(state, action) {
    switch (action.type) {
      case "m": {
        return state - action.payloda;
      }
      case "r": {
        return initialValue;
      }
      case "j": {
        return state + 1;
      }
    }
  }
  const [value, setValue] = useState(0);
  const [count, dispatch] = useReducer(countReducer, initialValue);
  const handlem = () => {
    dispatch({ type: "m", payloda: value });
  };

  const handler = () => {
    dispatch({ type: "r" });
  };
  const handlej = () => {
    dispatch({ type: "j" });
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <span>{count}</span>
      </div>
      <div className="flex gap-0.5">
        <button
          onClick={handlem}
          className=" text-4xl border border-gray-900 rounded-3xl px-4 py-2"
        >
          -
        </button>
        <button
          onClick={handler}
          className="text-4xl border border-gray-900 rounded-3xl px-4 py-2"
        >
          reset
        </button>
        <button
          onClick={handlej}
          className="text-4xl border border-gray-900 rounded-3xl px-4 py-2"
        >
          +
        </button>
        <input
          type="number"
          className="border border-gray-900"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Count;
