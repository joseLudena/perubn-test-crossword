import Crossword from "@/components/Crossword";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 p-4 flex flex-col items-center">

      {/* Main Content - Crossword */}
      <Crossword />
    </div>
  );
}
