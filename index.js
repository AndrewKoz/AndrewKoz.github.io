function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0,
    rollList: [], resultList: []};
  }

  numButtonClickedHandler(number) {
      let randomValue = getRandomIntInclusive(1, number);
      this.setState({sum: this.state.sum + randomValue});
      this.state.rollList.push(" " + number + ":");
      this.state.resultList.push(" " + randomValue + " ");
      this.setState({rollList: this.state.rollList.slice()});
      this.setState({resultList: this.state.resultList.slice()});
  }

  clearButtonClickedHandler() {
      this.setState({sum: 0});
      this.setState({diceNum: 0});
      this.setState({randomValue: 0});
      this.setState({rollList: []});
      this.setState({resultList: []});
  }

  plusButtonClickedHandler() {
      this.setState({sum: this.state.sum + 1});
      this.setState({diceNum: 0});
      this.setState({randomValue: 0});
  }

  minusButtonClickedHandler() {
      this.setState({sum: this.state.sum - 1});
      this.setState({diceNum: 0});
      this.setState({randomValue: 0});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div>
              <div className="board-row">
                  <button className="square" onClick={() => this.numButtonClickedHandler(4)}>  <img src="images/d4-64.png"/> </button>
                  <button className="square" onClick={() => this.numButtonClickedHandler(6)}> <img src="images/d6-64.png"/> </button>
                  <button className="square" onClick={() => this.numButtonClickedHandler(8)}>  <img src="images/d8-64.png"/> </button>
                  <button className="square" onClick={() => this.numButtonClickedHandler(10)}>  <img src="images/d10-64.png"/> </button>
                  <button className="square" onClick={() => this.numButtonClickedHandler(12)}>  <img src="images/d12-64.png"/> </button>
                  <button className="square" onClick={() => this.numButtonClickedHandler(20)}>  <img src="images/d20-64.png"/> </button>
                  <button className="square" onClick={() => this.clearButtonClickedHandler()}> <img src="images/undo-64.png"/> </button>
              </div>
              <div className="status">
                <button className="minus_square" onClick={() => this.minusButtonClickedHandler()}> <img src="images/minus-64.png"/> </button>
                  {this.state.sum}
                <button className="plus_square" onClick={() => this.plusButtonClickedHandler()}> <img src="images/plus-64.png"/> </button>
              </div>
              <div className="rollHistory">
                  {this.state.rollList}
              </div>
              <div className="resultHistory">
                  {this.state.resultList}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));