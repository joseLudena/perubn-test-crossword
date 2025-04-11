import Crossword from "@/components/Crossword";
import LoadingScreenMain from "@/components/LoadingScreen";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-slate-800 to-gray-900 p-4 flex flex-col items-center justify-center">

      {/* Loading Screen */}
      <LoadingScreenMain visible={true} />

      {/* Main Content - Crossword */}
      <Crossword />
    </div>
  );
}
