
export default function Home()
{
    return (
        <div className=" text-white min-h-screen flex flex-col items-center justify-center space-y-6">
           {/*GameBoard*/}
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
            <p className="text-white font-montserrat text-shadow-lg"> Pick who goes first?</p>
            {/*Buttons*/}
            <div className="flex space-x-6">
                <button className="text-black rounded-xl shadow-lg h-16 w-16 p-5">
                    X
                </button>
                <button className="text-black rounded-xl shadow-lg h-16 w-16 p-5">
                    Y
                </button>
            </div>
        </div>
    )
}