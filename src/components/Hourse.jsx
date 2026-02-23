import { useEffect, useRef, useState } from "react";

function Hourse() {
  const [date, setDate] = useState(() => new Date());
  const timeRef = useRef(null);
  useEffect(() => {
    timeRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    () => {
      clearInterval(timeRef.current);
    };
  }, []);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let time = "AM";
  if (hours >= 12) {
    hours = hours - 12;
    time = "PM";
  } else {
    time = "AM";
  }

  return (
    <div className="w-full h-44 bg-slate-900 flex justify-center items-center">
      <div>
        <span className="text-blue-700 text-6xl">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")} {time}
        </span>
      </div>
    </div>
  );
}

export default Hourse;
// getHours()
// getMinutes
// getSeconds
