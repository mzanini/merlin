import React from 'react'
import ActiveGamePage from '../containers/ActiveGamePage'
import GamesPage from './GamesPage'

const Page = ({ selectedGameId }) => {
  if(typeof selectedGameId != 'undefined' && selectedGameId != null)
    return <ActiveGamePage/>
  else
    return <GamesPage/>
}

export default Page