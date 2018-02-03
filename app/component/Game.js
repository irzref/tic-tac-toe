import React from 'react';
import {Board} from './Board.js';
import styles from '../Style.css';
import {calculateWinner} from '../Helper.js';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    
    const numOfSquares = 9; 
    const startStepNumber = 0;

    this.state = {
      history: [
        {
          squares: Array(numOfSquares).fill(null)
        }
      ],
      stepNumber: startStepNumber,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState((prevState, props) => ({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    }));
  }

  jumpTo(step) {
    this.setState((prevState, props) => ({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    }));
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className={styles.game_info}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}



