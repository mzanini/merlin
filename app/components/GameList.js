import React from 'react'
import GameCard from './GameCard'

const GameList = ({ games, selectGame, deleteGame }) => (
  <React.Fragment>
    {
      games ?
      games.map( (game) => <GameCard key={game.id} name={game.name} id={game.id}
        selectGame={selectGame} deleteGame={deleteGame}/>)
        : null
    }
  </React.Fragment>
)

export default GameList