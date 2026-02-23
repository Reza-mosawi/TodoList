import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem(key) || initialState)
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(note));
  }, [note]);

  return { note, setNote };
}
