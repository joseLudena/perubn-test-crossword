"use client"
import { useUI } from "@/context/UIContext";
import { reloadScreen } from "@/utils/regeneratingCrossword";

const CongratulationsModal = () => {
   const { modalCongratulations, setModalCongratulations } = useUI();

   const closeModal = () => {
      setModalCongratulations(false);
   }

   const onPlayAgain = () => {
      reloadScreen();
   };

   if (!modalCongratulations) return null

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
         <div className="relative mx-4 max-w-md rounded-xl bg-gradient-to-b from-indigo-900 to-slate-900 p-6 shadow-2xl animate-scale-in">
            <button onClick={closeModal} className="cursor-pointer absolute right-4 top-4 text-gray-400 hover:text-white">
               ✕
            </button>

            <div className="flex flex-col items-center text-center">
               <div className="mb-2 animate-bounce">
                  <div className="text-4xl text-yellow-400">🏆</div>
               </div>

               <div className="animate-fade-in">
                  <h2 className="mb-1 text-2xl font-bold text-white">¡Congratulations!</h2>
                  <h3 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                     ¡You did it!
                  </h3>
               </div>

               <p className="mb-6 text-gray-300 animate-fade-in-delay">
                  You've completed the crossword puzzle correctly. Do you want to continue playing?
               </p>

               <div className="flex flex-col sm:flex-row gap-3 w-full animate-fade-in-delay-long">
                  <div className="w-full">
                     <button
                        onClick={onPlayAgain}
                        className="cursor-pointer w-full rounded-lg py-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium"
                     >
                        Play again
                     </button>
                  </div>

                  <div className="w-full">
                     <button
                        onClick={closeModal}
                        variant="outline"
                        className="cursor-pointer w-full border-gray-600 text-gray-300 py-1 border boder-gray-900 rounded-lg hover:bg-gray-800 hover:text-white"
                     >
                        Exit
                     </button>
                  </div>
               </div>
            </div>

            <div className="absolute -top-2 left-1/4 animate-float">✨</div>
            <div className="absolute -top-4 right-1/4 animate-float-delay">✨</div>
            <div className="absolute -bottom-2 left-1/3 animate-float-delay-long">✨</div>
         </div>
      </div>
   )
}

export default CongratulationsModal;