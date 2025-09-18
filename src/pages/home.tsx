import GameBoard from "../components/Board"
import Buttons from "../components/button"

export default function Home()
{   
    function onSquareClick()
    {
        return;
    }

    return (
        <div className=" text-white min-h-screen flex flex-col items-center justify-center space-y-6">
           {/*GameBoard*/}
            <GameBoard squares={Array(9).fill(null)} onSquareClick={onSquareClick}/>
            <p className="text-white font-montserrat text-shadow-lg"> Pick who goes first?</p>
            {/*Buttons*/}
            <Buttons />
        </div>
    )
}