import Grid from "./Grid";
import Clues from "./Clues";

const clues = [
   "Animal doméstico que maúlla",
   "Mejor amigo del hombre",
   "Roedor pequeño",
   "Animal que vuela",
   "Roedor acuático grande",
   "Ave rapaz",
   "Animal grande y peludo",
];

const GameBoard = () => {

   return (
      <div className="flex flex-col lg:flex-row gap-6">
         <div className="flex-1 bg-gray-700/60 p-2 rounded-lg border border-gray-700">
            {Array.from({ length: 5 }, (_, index) => (
               <div key={index} className="grid grid-cols-6 gap-1 pb-1">
                  {Array.from({ length: 6 }, (_, i) => (
                     Grid(`grid-${i}`)
                  ))}
               </div>
            ))}
         </div>

         <Clues listClues={clues} />
      </div>
   )
}

export default GameBoard;