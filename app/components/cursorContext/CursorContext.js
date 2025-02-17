"use client";

import { useContext, useState, createContext } from "react";

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorProperties, setCursorProperties] = useState({
    color: "",
    text: "",
  });

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        setCursorVariant,
        cursorProperties,
        setCursorProperties,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
