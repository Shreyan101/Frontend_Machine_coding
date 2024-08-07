import React, { useState } from 'react';
import './chess.css';

const Chess = () => {
  const boardSize = 7;
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [knightMoves, setKnightMoves] = useState([]);

  const isBlack = (row, col) => (row + col) % 2 === 1;

  const getKnightMoves = (row, col) => {
    const moves = [
      [row + 2, col + 1],
      [row + 2, col - 1],
      [row - 2, col + 1],
      [row - 2, col - 1],
      [row + 1, col + 2],
      [row + 1, col - 2],
      [row - 1, col + 2],
      [row - 1, col - 2],
    ];

    return moves.filter(
      ([r, c]) => r >= 0 && r < boardSize && c >= 0 && c < boardSize
    );
  };

  const handleBoxClick = (row, col) => {
    setSelectedPosition([row, col]);
    setKnightMoves(getKnightMoves(row, col));
  };

  return (
    <div className='chessboard'>
      <h1>Chess</h1>
      {Array.from({ length: boardSize }).map((_, row) => (
        <div className='row' key={row}>
          {Array.from({ length: boardSize }).map((_, col) => (
            <div
              key={col}
              className={`box ${isBlack(row, col) ? 'black' : 'white'} ${
                selectedPosition &&
                selectedPosition[0] === row &&
                selectedPosition[1] === col
                  ? 'selected'
                  : ''
              } ${
                knightMoves.some((move) => move[0] === row && move[1] === col)
                  ? 'knight-move'
                  : ''
              }`}
              onClick={() => handleBoxClick(row, col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chess;
