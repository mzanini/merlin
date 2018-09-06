import React from 'react'
import NewGameNameInput from '../containers/NewGameNameInput'
import AllGamesList from '../containers/AllGamesList'
import CreateNewGameButton from '../containers/CreateNewGameButton'
import ActiveGamePage from '../containers/ActiveGamePage'

const Page = ({ selectedGame, newGamePage }) => {
  if(typeof selectedGame != 'undefined' && selectedGame != null)
    return <ActiveGamePage/>
  else if(newGamePage)
    return <NewGameNameInput/>
  else
    return (
    <React.Fragment>
      <AllGamesList/>
      <CreateNewGameButton/>
    </React.Fragment>
    )
}

export default Page