import React from 'react'
import NewGameNameInput from '../containers/NewGameNameInput'
import AllGamesList from '../containers/AllGamesList'

const Page = ({ selectedGame, newGamePage }) => {
  if(selectedGame)
    return <div>selectedGame</div>
  else if(newGamePage)
    return <NewGameNameInput/>
  else
    return <AllGamesList/>
}

export default Page