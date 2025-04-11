'use client';
import { useEffect, useRef } from "react";

import { useCrossword } from "@/context/CrosswordContext";

import Grid from "./Grid";
import Clues from "./Clues";

import generateCrosswordGrid from "@/utils/generatePuzzle";

const GameBoard = () => {
   const { puzzles, gridData, setGridData, clues, setClues } = useCrossword();

   const getClueNumber = (row, col) => {
      const clue = clues.find(({ row: r, col: c }) => r === row && c === col);
      return clue ? clues.indexOf(clue) + 1 : null;
   };

   useEffect(() => {
      const { grid, hints } = generateCrosswordGrid(puzzles);
      setGridData(grid);
      setClues(hints);
   }, [puzzles]);

   return (
      <div className="flex flex-col lg:flex-row gap-6">
         <div className="flex-1 bg-gray-700/90 p-2 rounded-md border border-gray-700">
            {gridData.map((row, rowIndex) => (
               <div key={rowIndex} className="grid grid-cols-6 gap-1 pb-1">
                  {row.map((cell, colIndex) => {
                     const key = `${rowIndex}-${colIndex}`;
                     const clueNumber = getClueNumber(rowIndex, colIndex);

                     return (
                        <div key={key} className="relative">

                           {/* Clue Number */}
                           {clueNumber && (
                              <span className="absolute z-10 top-0 left-0 text-xs md:text-sm text-cyan-400 p-1">
                                 {clueNumber}
                              </span>
                           )}

                           {/* Grid */}
                           <Grid
                              cell={cell}
                              rowIndex={rowIndex}
                              colIndex={colIndex}
                           />
                        </div>
                     );
                  })}
               </div>
            ))}
         </div>

         {/* Clues */}
         <Clues />
      </div>
   );
};

export default GameBoard;
