export default function GameBoard()
{

    return(
        <div className="grid grid-cols-3 bg-white rounded-2xl shadow-lg w-72 h-72 mb-6">
            {Array(9).fill(null).map((_, i) => (
            <div
                key={i}
                className="border border-gray-300 flex items-center justify-center text-4xl font-bold text-gray-600"
            >
                {/* X or O goes here later */}
            </div>
            ))}
        </div>
    )
}