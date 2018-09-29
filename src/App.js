import Game from './components/game/Game';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Game of life</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
