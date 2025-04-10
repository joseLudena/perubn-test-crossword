"use client";
import { useUI } from "@/context/UIContext";

const DropdownHelp = () => {
   const { helpDropdown, rules } = useUI();

   return (
      <div className={`${helpDropdown ? 'block' : 'hidden'} mb-6 bg-gray-700/60 p-4 rounded-lg text-gray-300 text-sm`} >
         <h2 className="text-cyan-400 font-semibold mb-2">
            How to play?
         </h2>
         <ul className="list-disc pl-5 space-y-1">
            {rules.map((rul, index) => {
               return (
                  <li key={index}>
                     {rul}
                  </li>
               )
            })}
         </ul>
      </div>
   )
}

export default DropdownHelp;