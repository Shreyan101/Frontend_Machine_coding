import React, { useState } from 'react';
import './SpreadSheet.css'; // Make sure to create this CSS file

// Utility to parse and evaluate a formula
const evaluateFormula = (formula, cells) => {
  const regex = /([A-Z]+)([0-9]+)/g;
  let parsedFormula = formula;

  let match;
  while ((match = regex.exec(formula)) !== null) {
    const col = match[1].charCodeAt(0) - 65;
    const row = parseInt(match[2], 10) - 1;
    parsedFormula = parsedFormula.replace(match[0], cells[row][col] || 0);
  }

  try {
    return eval(parsedFormula);
  } catch {
    return 'Error';
  }
};

// Cell component
const Cell = ({ row, col, value, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(value);

  const handleBlur = () => {
    setEditing(false);
    onChange(row, col, input);
  };

  return (
    <td className='cell' onClick={() => setEditing(true)} onBlur={handleBlur}>
      {editing ? (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className='cell-input'
          onBlur={handleBlur}
        />
      ) : (
        value
      )}
    </td>
  );
};

// Spreadsheet component
const Spreadsheet = () => {
  // Initialize the state with a deep copy of a 5x5 array filled with empty strings
  const initialCells = Array.from({ length: 5 }, () => Array(5).fill(''));
  const [cells, setCells] = useState(initialCells);

  const handleChange = (row, col, newValue) => {
    const newCells = cells.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? newValue : c))
    );

    if (newValue.startsWith('=')) {
      newCells[row][col] = evaluateFormula(newValue.slice(1), newCells);
    }

    setCells(newCells);
  };

  return (
    <div className='spreadsheet-container'>
      <table className='spreadsheet'>
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <Cell
                  key={colIndex}
                  row={rowIndex}
                  col={colIndex}
                  value={cell}
                  onChange={handleChange}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
