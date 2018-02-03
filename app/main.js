import React from 'react';
import ReactDOM from 'react-dom';
import {Game} from './component/Game.js';
import helper from './Helper.js';

const render = Game.render(document.getElementById('root'));

const numOfSquares = 9;

const startStepNumber = 0;

const state = {
    history: [
        {
        squares: Array(numOfSquares).fill(null)
        }
    ],
    stepNumber: startStepNumber,
    xIsNext: true
};

const handleClick = (props, i) => {
    const history = props.state.history.slice(0, props.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const xIsNext = props.state.xIsNext;
    
    if (helper.calculateWinner(squares) || squares[i]) {
      return;
    }
    
    squares[i] = xIsNext ? "X" : "O";
    
    const state = {
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !props.state.xIsNext
    };

    const handleClick = props.handleClick; 
    const jumpTo = props.jumpTo;

    render({state, handleClick, jumpTo});
  }

const jumpTo = (props, step) => {
    const state = {
        history: props.state.history.slice(),
        stepNumber: step,
        xIsNext: (step % 2) === 0
    };

    render({state, handleClick, jumpTo});
}


render({state, handleClick, jumpTo});