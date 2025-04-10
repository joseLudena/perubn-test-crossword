"use client";
import { useState } from "react";

const ButtonHelp = () => {
   const [status, setStatus] = useState(false);

   const handleHelp = () => {
      setStatus(!status);
   }

   return (
      <div className="flex gap-2">
         <button onClick={handleHelp} className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border h-9 rounded-md px-3 cursor-pointer flex items-center gap-1 border-gray-600 bg-gray-700 text-cyan-300">
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

export default ButtonHelp;