import React, { useState } from 'react';
import './tictactoe.css';

const Square = ({ value, handleClick }) => {
  return (
    <div className='square' onClick={handleClick}>
      {value}
    </div>
  );
};

const calculateWinner = (squares) => {
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
    if (squares?.[a] === squares?.[b] && squares?.[c] === squares?.[a]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXisNext(!xIsNext);
  };

  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner is: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const renderSquare = (i) => {
    return <Square value={squares[i]} handleClick={() => handleClick(i)} />;
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXisNext(true);
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <div className='status'> {status}</div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        {winner ? (
          <div className='parentBtn'>
            <button className='reset' onClick={() => handleReset()}>
              Restart Game
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TicTacToe;
