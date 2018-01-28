import React from 'react';
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const GameItem = (props) => {
  return (
    <li  className="list-group-item list-group-item-action">
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <a onClick={() => props.loadGame(props.name)}>{props.name}</a>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <a onClick={() => props.deleteGame(props.name)}>
              <span className="glyphicon glyphicon-remove-circle"/>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

class Start extends React.Component {
  constructor() {
    super()
    this.loadGame = this.loadGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
  }

  loadGame(gameName) {
    this.props.history.push(`/game/${gameName}`)
  }

  deleteGame(gameName) {
    this.props.deleteGame(gameName)
  }

  startNewGame() {
    this.props.createNewGame(this.gameName.value);
    this.props.history.push(`/game/${this.gameName.value}`)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <button className="btn btn-success">Load previous Game</button>
            <ul className="list-group">
              {
                Object.keys(this.props.games)
                  .map(name => <GameItem key={name} name={name} loadGame={this.loadGame} deleteGame={this.deleteGame}/>)
              }
            </ul>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <form onSubmit={() => {this.startNewGame()}}>
              <button className="btn btn-success" type="submit">Start New Game -></button>
              <input type="text" required placeholder="Game Name" ref={(input) => {this.gameName = input}}/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Start)