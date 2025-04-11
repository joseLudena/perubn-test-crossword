"use client";
import { useCrossword } from "@/context/CrosswordContext";

const Clues = () => {
   const { clues, setActiveWord } = useCrossword();

   const handleClueClick = ({ row, col, word, direction }) => {
      const key = `${row}-${col}`;
      const input = document.getElementById(key);
      if (input) input.focus();
      setActiveWord(`${word}-${direction}`);
   };

   return (
      <div className="w-full lg:w-80 bg-gray-800/60 p-4 rounded-lg border border-gray-700">
         <h2 className="text-lg font-semibold text-cyan-400 mb-2 border-b border-gray-700 pb-1">
            CLUES
         </h2>

         <ul className="space-y-2">
            {clues.map(({ row, col, clue, completed, word, direction }, index) => (
               <li
                  onClick={() => handleClueClick({ row, col, word, direction })}
                  key={index}
                  className={`text-sm p-2 rounded cursor-pointer transition-all border-l-2
                     ${completed ? "bg-green-700/70 text-white" : "hover:bg-gray-700 text-gray-300"}`
                  }
               >
                  <span className="font-bold pr-1">
                     {index + 1}.
                  </span>
                  {clue}
                  {completed && (
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinejoin="round"
                        className="lucide lucide-check text-white h-4 w-4 inline ml-1"
                     >
                        <path d="M20 6 9 17l-5-5" />
                     </svg>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Clues;
