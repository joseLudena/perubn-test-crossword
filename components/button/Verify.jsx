"use client";
import { useCrossword } from "@/context/CrosswordContext";
import { useUI } from "@/context/UIContext";

import { applyStyles, clearStyles, isWordCorrect, updateStatuses } from "@/utils/interactionGrid";

const VerifyButton = () => {
   const { clues, setClues, cellRefs, setCellStatus } = useCrossword();
   const { setModalCongratulations } = useUI();

   const handleVerify = () => {
      // Return early if no clues
      if (!clues?.length) return;

      const updatedClues = clues.map(clue => {
         const { row, col, word, direction } = clue;

         // Get cells for the word
         const cells = word.split("").map((_, i) => {
            const key = direction === "H" ? `${row}-${col + i}` : `${row + i}-${col}`;
            return cellRefs.current[key];
         });

         // Get cell values and check if empty
         const values = cells.map(cell => cell?.value.toUpperCase() || "");
         if (values.every(v => v === "")) {
            clearStyles(cells);
            return { ...clue, completed: false };
         }

         // Check if the word is correct
         const correct = isWordCorrect(word, values);
         applyStyles(cells, correct);
         updateStatuses(cells, direction, row, col, correct, setCellStatus);

         return { ...clue, completed: correct };
      });

      setClues(updatedClues);

      // Show congratulations if all clues are completed
      if (updatedClues.every(c => c.completed)) {
         setModalCongratulations(true);
      }
   };

   return (
      <div>
         <button
            onClick={handleVerify}
            className="justify-center text-sm border py-2 rounded-md px-6 flex items-center cursor-pointer gap-1 border-gray-600 bg-gray-800 text-white hover:border-cyan-500/50 hover:shadow-cyan-900/20 hover:bg-gray-700/90 hover:text-cyan-300"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinejoin="round"
               className="lucide lucide-check h-4 w-4 mr-2 inline-block"
            >
               <path d="M20 6 9 17l-5-5" />
            </svg>
            Verify
         </button>
      </div>
   );
};

export default VerifyButton;
