import React from 'react'
import AllGamesList from '../containers/AllGamesList'
import NewGameNameInput from '../containers/NewGameNameInput';

const GamesPage = () => {
  return (
    <React.Fragment>
      <AllGamesList/>
      <NewGameNameInput/>
    </React.Fragment>
  )
}

export default GamesPage