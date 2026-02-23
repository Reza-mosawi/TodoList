import { useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Tamrin() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timeRef = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());
    clearInterval(timeRef.current);
    timeRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
  };
  let time = 0;
  if (start !== null || now !== null) {
    time = now - start;
  }



  return (
    <div className="flex justify-center flex-col items-center">
      <span className="inline-block font-bold text-3xl mb-2">
        Time Passed:
        {time}
      </span>
      <div>
        <button
          onClick={handleStart}
          className=" text-white bg-indigo-700 rounded-[4px]  w-24 text-center h-11 cursor-pointer mr-2"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className=" text-white bg-indigo-700 rounded-[4px]  w-24 text-center h-11 cursor-pointer"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Tamrin;
