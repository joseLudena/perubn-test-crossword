import GenerateCrossWordButton from "./button/GenerateCrossword";
import HelpButton from "./button/Help";
import VerifyButton from "./button/Verify";

const CrosswordHeader = () => {
   return (
      <div className="lg:flex sm:block justify-between items-center mb-6">
         <h1 className="text-4xl font-bold text-white">
            CROSSWORD
         </h1>

         <div className="flex gap-2 mt-4 lg:mt-0 sm:justify-end lg:justify-start">
            <HelpButton />
            <GenerateCrossWordButton />
            <VerifyButton />
         </div>
      </div>
   )
}

export default CrosswordHeader;