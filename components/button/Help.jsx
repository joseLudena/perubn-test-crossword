"use client";
import { useUI } from "@/context/UIContext";

const HelpButton = () => {
   const { helpDropdown, setHelpDropdown } = useUI();

   const handleHelp = () => {
      setHelpDropdown(!helpDropdown);
   }

   return (
      <div>
         <button onClick={handleHelp} className="justify-center text-sm font-medium border py-2 rounded-md px-4 flex items-center cursor-pointer gap-1 border-gray-600 bg-gray-800 text-white hover:border-cyan-500/50 hover:shadow-cyan-900/20 hover:bg-gray-700/90 hover:text-cyan-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-help h-4 w-4">
               <circle cx="12" cy="12" r="10" />
               <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
               <path d="M12 17h.01" />
            </svg>
            Help
         </button>
      </div>
   )
}

export default HelpButton;