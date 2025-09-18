import Board from '../components/Board'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import calculateWinner from '../utils/calculate-winner'

export default function Game() {
  const location = useLocation();
  const firstPlayer = location.state?.firstPlayer || 'X'; // Default to 'X' if no state
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  
  // Use the firstPlayer to determine who starts
  const xIsNext = firstPlayer === 'X' ? currentMove % 2 === 0 : currentMove % 2 !== 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Handle square clicks
  function handleClick(i) {
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    handlePlay(nextSquares);
  }

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
        <h1 className="text-white text-3xl font-extrabold tracking-wide mb-4">
          TIC-TAC-TOE
        </h1>
        <p className="text-white text-lg font-semibold mb-6">
          {status}
        </p>
        
        <Board 
          squares={currentSquares} 
          onSquareClick={handleClick} 
        />
      </div>
      
      <span className="absolute left-10 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/20 select-none">
        X
      </span>
      <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/20 select-none">
        O
      </span>
    </>
  );
}