export default function Game()
{

  return (
    <>
        <div className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-white text-3xl font-extrabold tracking-wide mb-4">
                TIC-TAC-TOE
            </h1>
            <p className="text-white text-lg font-semibold mb-6">
                Player #’s Turn
            </p>
            <div className="grid grid-cols-3 bg-white rounded-2xl shadow-lg w-72 h-72">
            {Array(9).fill(null).map((_, i) => (
                <div
                    key={i}
                    className="border border-gray-300 flex items-center justify-center text-4xl font-bold text-gray-600"
                >
            {/* X or O goes here later */}
          </div>
        ))}
      </div>
        {/*GameBoard*/}
        </div>
        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/20 select-none">
            ×
        </span>
        <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/20 select-none">
            ○
        </span>

        <div className="game">

        </div>
    </>
   
  );
}