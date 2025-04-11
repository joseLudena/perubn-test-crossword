'use client';
import DropdownHelp from "./dropdown/Help";
import CrosswordGrid from "./GameBoard";
import CrosswordHeader from "./CrosswordHeader";
import CongratulationsModal from "./modal/Cogratulations";

const Crossword = () => {

   return (
      <div className="w-full max-w-5xl lg:bg-[#111a2f]/80 backdrop-blur-sm rounded-xl shadow-2xl lg:p-6 md:px-10  lg:border border-gray-700">

         {/* Modal - Congratulations*/}
         <CongratulationsModal />

         {/* Header - Crossword */}
         <CrosswordHeader />

         {/* Dropdown - Crossword */}
         <DropdownHelp />

         {/* Grid - Crossword */}
         <CrosswordGrid />
      </div>
   )
}

export default Crossword;