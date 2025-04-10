import DropdownHelp from "./dropdown/Help";
import CrosswordGrid from "./GameBoard";
import HeaderCrossword from "./HeaderCrossword";

const Crossword = () => {
   return (
      <div className="w-full max-w-5xl lg:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-2xl lg:p-6 md:px-10 mt-10 lg:border border-gray-700">

         {/* Header - Crossword */}
         <HeaderCrossword />

         {/* Dropdown - Crossword */}
         <DropdownHelp />

         {/* Grid - Crossword */}
         <CrosswordGrid />
      </div>
   )
}

export default Crossword;