const Clues = ({ listClues }) => {

   return (
      <div className="w-full lg:w-80 bg-gray-800/60 p-4 rounded-lg border border-gray-700">
         <h2 className="text-lg font-semibold text-cyan-400 mb-2 border-b border-gray-700 pb-1">
            CLUES
         </h2>

         <ul className="space-y-2">
            {listClues.map((clue, index) => (
               <li key={index} className="text-sm p-2 rounded cursor-pointer transition-all hover:bg-gray-700 text-gray-300 border-l-2 border-transparent">
                  <span className="font-bold pr-1">
                     {index + 1}.
                  </span>
                  {clue}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Clues;