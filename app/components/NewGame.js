import React from 'react'
import { withRouter } from 'react-router-dom'

class NewGame extends React.Component {
  startNewGame(event) {
    event.preventDefault()
    const gameName = this.gameName.value
    this.props.history.push(`/game/${gameName}`)
  }

  render() {
    return (
      <form onSubmit={this.startNewGame.bind(this)}>
        <h2>Please Enter A Name for this New Game</h2>
        <input type="text" required placeholder="Game Name" ref={(input) => {this.gameName = input}}/>
        <button type="submit">Start New Game -></button>
      </form>
    );
  }
}

export default withRouter(NewGame)