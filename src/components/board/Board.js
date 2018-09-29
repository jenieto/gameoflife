import Cell from '../cell/Cell';
import React, { Component } from 'react';

import './Board.css';

class Board extends Component {
  isCellActive(i, j) {
    return this.props.activeCells.some((cell) => cell.x == i && cell.y == j);
  }

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
          <Cell state={this.isCellActive(row, column)} />);
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