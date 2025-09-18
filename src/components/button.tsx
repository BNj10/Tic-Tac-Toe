import { useNavigate } from 'react-router-dom';

export default function Button() {
    const navigate = useNavigate();

    function handlePlayerSelect(player: 'X' | 'O') {
        // Redirect to /game and pass the selected player as state
        navigate('/game', { state: { firstPlayer: player } });
    }

    return (
        <div className="flex space-x-6">
            <button
                className="text-black rounded-xl shadow-lg h-25 w-25 p-5"
                onClick={() => handlePlayerSelect('X')}
            >
                X
            </button>
            <button
                className="text-black rounded-xl shadow-lg h-25 w-25 p-5"
                onClick={() => handlePlayerSelect('O')}
            >
                O
            </button>
        </div>
    );
}