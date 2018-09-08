import React from 'react'
import ActiveGamePage from '../containers/ActiveGamePage'
import GamesPage from './GamesPage'

const Page = ({ selectedGame, newGamePage }) => {
  if(typeof selectedGame != 'undefined' && selectedGame != null)
    return <ActiveGamePage/>
  else
    return <GamesPage/>
}

export default Page