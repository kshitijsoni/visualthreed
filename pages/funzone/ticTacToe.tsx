import { useEffect, useState } from "react";
import Square from "../../components/square";

type Player = "X" | "O" | "BOTH" | null;

function calculateWinner(squares: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {!winner && <p className="text-white text-xl md:text-2xl py-2">Hey {currentPlayer}, it&apos;s your turn</p>}
      {winner && winner !== "BOTH" && <p className="text-white text-xl md:text-2xl py-2">Congratulations {winner}</p>}
      {winner && winner === "BOTH" && (
        <div className="text-white text-xl md:text-2xl py-2 flex">It&apos;s a tie,&nbsp;<p className="underline cursor-pointer" onClick={reset}>Play again</p></div>
      )}

      <div className="grid grid-cols-3">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>

      <button className='w-56 p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm  bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg' onClick={reset}>Reset</button>

    </div>
  );
}

export default Board;
