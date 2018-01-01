import React from 'react';
import { withRouter } from 'react-router-dom'

const Start = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <button onClick={(event) => {event.preventDefault(); props.history.push('/game/new-game')}}>Start a New Game!</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button>Load previous Game</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Start)