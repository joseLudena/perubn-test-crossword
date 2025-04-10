import ButtonHelp from "./button/Help";

const HeaderCrossword = () => {

   return (
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-2xl font-bold txt-white">
            CROSSWORD
         </h1>

         <ButtonHelp />
      </div>
   )
}

export default HeaderCrossword;