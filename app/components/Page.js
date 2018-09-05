import React from 'react'
import NewGameNameInput from '../containers/NewGameNameInput'
import AllGamesList from '../containers/AllGamesList'

const Page = ({ selectedGame, newGamePage }) => {
  if(typeof selectedGame != 'undefined' && selectedGame != null)
    return <div>selectedGame</div>
  else if(newGamePage)
    return <NewGameNameInput/>
  else
    return <AllGamesList/>
}

export default Page