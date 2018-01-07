import React from 'react';
import { withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const Start = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <button className="btn btn-success">Load previous Game</button>
          <ul>
            {
              Object.keys(props.games)
                .map(name => <span key={name}>{name}</span>)
            }
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <button className="btn btn-success" onClick={(event) => {event.preventDefault(); props.history.push('/new-game')}}>Start a New Game!</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Start)