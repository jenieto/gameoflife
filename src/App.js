import Board from './components/board/Board';
import React, { Component } from 'react';
import './App.css';

const width = 20;
const height = 20;
const activeCells = [
  { x: 1, y: 0 },
  { x: 1, y: 4 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
  { x: 4, y: 2 },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Game of life</h1>
        </header>
        <Board
          activeCells={activeCells}
          width={width}
          height={height} />
      </div>
    );
  }
}

export default App;
