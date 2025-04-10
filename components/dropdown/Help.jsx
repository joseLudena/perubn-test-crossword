const rules = [
   "Click on a cell to select it",
   "Type letters using your keyboard to fill in the words",
   "Use the arrow keys to move between cells",
   "Press Tab to switch between horizontal and vertical direction",
   "Correct words will lock automatically and appear in green"
];

const DropdownHelp = ({ status }) => {

   return (
      <div className="mb-6 bg-gray-700/60 p-4 rounded-lg text-gray-300 text-sm" >
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