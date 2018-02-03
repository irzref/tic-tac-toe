import React from 'react';
import {Square} from './Square.js';
import styles from '../Style.css';

export let Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i.toString()}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  const numOfSquaresInRow = 3;
  const numOfRow = 3;

  const rows = Array(numOfRow).fill(null).map((row, indexOfRow) => {
    
    const squares = Array(numOfSquaresInRow).fill(null).map((square, indexOfSquare) => {
      const i = indexOfSquare + indexOfRow * numOfSquaresInRow;
      return (renderSquare(i))
    })
    
    return (
    <div key={indexOfRow.toString()} className={styles.board_row}>      
      {squares}
    </div>)
  }) 

  return (
    <div>      
      {rows}
    </div>
  );
}

export default {Board};