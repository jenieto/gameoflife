import Cell from '../cell/Cell';
import React, { Component } from 'react';

import { isCellActive } from '../game/GameLogic';

import './Board.css';

class Board extends Component {
  render() {
    const matrix = [];
    const {
      activeCells,
      width,
      height } = this.props;

    for (let row = 0; row < width; row++) {
      const cellsPerRow = [];
      for (let column = 0; column < height; column++) {
        cellsPerRow.push(
          <Cell state={isCellActive(activeCells, row, column)} />);
      }
      matrix.push(<div className="row">{cellsPerRow}</div>);
    }
    
    return (
      <div class='board'>
        {matrix}
      </div>);
    }
}

export default Board;