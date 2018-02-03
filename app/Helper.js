import React from 'react';
import styles from './Style.css';

export let calculateWinner = (squares) => {    
  const lines = Object.freeze([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]);

  const winnerLinesIndex = lines.findIndex(line => {
    const [a, b, c] = line;
    return (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
  });

  const winner = lines[winnerLinesIndex] && squares[lines[winnerLinesIndex][0]];

  return winner || null;
}

export default {calculateWinner};