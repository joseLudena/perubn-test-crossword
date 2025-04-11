"use client";
import { createContext, useContext, useRef, useState } from "react";
import crosswordData from "@/data/crossword.json";

const CrosswordContext = createContext();

export const CrosswordProvider = ({ children }) => {
  const cellRefs = useRef({});
  const { puzzles } = crosswordData;
  const [gridData, setGridData] = useState([]);
  const [clues, setClues] = useState([]);
  const [activeWord, setActiveWord] = useState([]);
  const [cellStatus, setCellStatus] = useState({});

  return (
    <CrosswordContext.Provider
      value={{
        puzzles,
        gridData,
        activeWord,
        clues,
        cellRefs,
        cellStatus,
        setGridData,
        setClues,
        setActiveWord,
        setCellStatus
      }}>
      {children}
    </CrosswordContext.Provider>
  );
};

export const useCrossword = () => useContext(CrosswordContext);
