import React from 'react';
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import AppBar from '@material-ui/core/AppBar'

const GameItem = (props) => {
  return (
    <li  className="list-group-item list-group-item-action">
      <div className="container-fluid">
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

class NewGameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.startNewGame(this.state.value);
  }

  render() {
    return (
      <li  className="list-group-item list-group-item-action">
        <div className="container-fluid">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
              <input type="text" required placeholder="New Game" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <button className="btn btn-link" type="submit">
                <span className="glyphicon glyphicon-chevron-right"/>
              </button>
            </div>
            </form>
          </div>
        </div>
      </li>
    )
  }
}

class Start extends React.Component {
  constructor() {
    super()
    this.loadGame = this.loadGame.bind(this)
    this.deleteGame = this.deleteGame.bind(this)
    this.startNewGame = this.startNewGame.bind(this)
  }

  loadGame(gameName) {
    this.props.history.push(`/game/${gameName}`)
  }

  deleteGame(gameName) {
    this.props.deleteGame(gameName)
  }

  startNewGame(name) {
    this.props.createNewGame(name);
    this.props.history.push(`/game/${name}`)
  }

  render() {
    return (
      <div className="container-fluid">
        <AppBar position="static" color="default">
          Game List
        </AppBar>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h1></h1>
            <ul className="list-group">
              {
                Object.keys(this.props.games)
                  .map(name => <GameItem key={name} name={name} loadGame={this.loadGame} deleteGame={this.deleteGame}/>)
              }
              <NewGameItem startNewGame={this.startNewGame}/>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Start)