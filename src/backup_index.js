import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let sum = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Square extends React.Component {
  render() {
    return (
        <button
            className="square"
            onClick={() => {sum += getRandomIntInclusive(1, this.props.value); alert(sum);}}
        >
           {this.props.value}
        </button>

    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
  }

  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    return (
      <div>
          <div className="board-row">
          {this.renderSquare(2)}
          {this.renderSquare(4)}
          {this.renderSquare(6)}
          {this.renderSquare(8)}
          {this.renderSquare(12)}
          {this.renderSquare(20)}
          {this.renderSquare('clean')}
        </div>
        <div className="status">{sum}</div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
