import React from 'react';
import R from 'ramda';
import ReactDOM from 'react-dom';
import {Board} from './Board.js';
import styles from '../Style.css';
import helper from '../Helper.js';

export const Game = (props) => {
  
  const history = props.state.history;
  const current = history[props.state.stepNumber];
  const winner = helper.calculateWinner(current.squares);
  const status = winner ? "Winner: " + winner :  "Next player: " + (props.state.xIsNext ? "X" : "O");
  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => props.jumpTo(props, move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => props.handleClick(props,i)}
        />
      </div>
      <div className={styles.game_info}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

Game.render = R.curry((node, props) => ReactDOM.render(<Game {...props}/>, node));

export default {Game};

