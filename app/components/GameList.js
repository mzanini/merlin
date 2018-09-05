import React from 'react'
import GameCard from './GameCard'

const GameList = ({ games, selectGame }) => (
  <React.Fragment>
    {
      games ?
      games.map( (game, index) => <GameCard key={index} name={game.name} id={index} selectGame={selectGame}/>)
        : null
    }
  </React.Fragment>
)

export default GameList