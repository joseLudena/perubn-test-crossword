'use client';
import { useCrossword } from "@/context/CrosswordContext";

import GridDisabled from "./GridDisabled";

const Grid = ({ cell, rowIndex, colIndex }) => {
   const { gridData, setActiveWord, activeWord, cellRefs, cellStatus } = useCrossword();
   const gridDisabled = cell.letter === '.';

   // Get all cells in the current word
   const getCellsInWord = () => {
      return gridData.flatMap((row, r) =>
         row.map((current, c) => current.word === cell.word && current.direction === cell.direction
            ? { ...current, row: r, col: c }
            : null
         ).filter(Boolean)
      ).sort((a, b) =>
         cell.direction === 'H' ? a.col - b.col : a.row - b.row
      );
   };

   const focusCell = (row, col) => {
      const input = cellRefs.current[`${row}-${col}`];
      if (input) input.focus();
   };

   const handleCellClick = () => {
      setActiveWord(`${cell.word}-${cell.direction}`);
      focusCell(rowIndex, colIndex);
   };

   const moveToNextCell = () => {
      const cells = getCellsInWord();
      const index = cells.findIndex(c => c.row === rowIndex && c.col === colIndex);
      const next = cells[index + 1];
      if (next) focusCell(next.row, next.col);
   };

   const moveToPrevCell = () => {
      const cells = getCellsInWord();
      const index = cells.findIndex(c => c.row === rowIndex && c.col === colIndex);
      const prev = cells[index - 1];
      if (prev) focusCell(prev.row, prev.col);
   };

   const handleGridChange = (e) => {
      handleCellClick();
      if (e.target.value.length === 1) moveToNextCell();
   };

   const isActiveCell = activeWord === `${cell.word}-${cell.direction}`;

   return (
      <div className="p-[0.5px] aspect-square" onClick={handleCellClick}>
         {!gridDisabled ? (
            <input
               id={`${rowIndex}-${colIndex}`}
               type="text"
               maxLength={1}
               onInput={handleGridChange}
               onFocus={(e) => e.target.select()}
               ref={(el) => cellRefs.current[`${rowIndex}-${colIndex}`] = el}
               onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                     const input = cellRefs.current[`${rowIndex}-${colIndex}`];
                     if (input && input.value === "") {
                        e.preventDefault();
                        moveToPrevCell();
                     }
                  }
               }}
               className={`relative text-center rounded-sm font-semibold w-full h-full text-4xl uppercase
                  ${cellStatus[`${rowIndex}-${colIndex}`] === 'correct' ? 'bg-green-600 text-white'
                     : cellStatus[`${rowIndex}-${colIndex}`] === 'incorrect' ? 'bg-red-800 text-white'
                        : isActiveCell ? 'bg-cyan-950 text-cyan-300 border-cyan-500'
                           : 'bg-gray-950/80 text-gray-100 border-gray-500'}
                  focus:outline-none focus:ring-2 focus:ring-cyan-500 
                  focus:bg-gray-900`}
            />
         ) : (
            <GridDisabled />
         )}
      </div>
   );
};

export default Grid;