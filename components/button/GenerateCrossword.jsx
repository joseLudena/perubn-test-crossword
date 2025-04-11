"use client";
import { reloadScreen } from "@/utils/regeneratingCrossword";

const GenerateCrossWordButton = () => {
   const handleGenerate = () => {
      reloadScreen();
   }

   return (
      <div>
         <button
            onClick={handleGenerate}
            className="justify-center text-sm font-medium border py-2 rounded-md px-4 flex items-center cursor-pointer gap-1 border-gray-600 bg-gray-800 text-white hover:border-cyan-500/50 hover:shadow-cyan-900/20 hover:bg-gray-700/90 hover:text-cyan-300"
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
               className="lucide lucide-rotate-ccw h-4 w-4 mr-2 inline-block"
            >
               <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
               <path d="M3 3v5h5" />
            </svg>
            New
         </button>
      </div>
   );
};

export default GenerateCrossWordButton;
