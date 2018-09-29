import Board from '../board/Board';
import React, { Component } from 'react';

import { CalculateNextActiveCells } from './GameLogic';

const width = 20;
const height = 20;
const activeCells = [
  { x: 1, y: 0 },
  { x: 1, y: 4 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
  { x: 4, y: 2 },
  { x: 10, y: 12 },
  { x: 11, y: 12 },
  { x: 12, y: 12 },
];

class Game extends Component {
  constructor() {
    super();
    this.state = {
      activeCells: activeCells
    };
  }

  next() {
    const nextActiveCells = CalculateNextActiveCells(this.state.activeCells, width, height);
    this.setState({
      activeCells: nextActiveCells
    });
  }

  onStartGame() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.setState({
      activeCells: activeCells
    });
    this.interval = setInterval(() => this.next(), 100);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.onStartGame(e)}>
          Start Game
        </button>
        <Board
          activeCells={this.state.activeCells}
          width={width}
          height={height} />
      </div>);
  }
}

export default Game;
