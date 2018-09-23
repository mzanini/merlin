import React from 'react'
import PropTypes from 'prop-types'
import ActiveGamePage from '../containers/ActiveGamePage'
import GamesPage from './GamesPage'
import Settings from './Settings'

const Page = ({ selectedGameId, settingsOpen }) => {
  if (settingsOpen)
    return <Settings/>
  else if (typeof selectedGameId !== 'undefined' && selectedGameId !== null)
    return <ActiveGamePage/>
  else
    return <GamesPage/>
}

Page.propTypes = {
  selectedGameId: PropTypes.string,
  settingsOpen: PropTypes.bool
}

export default Page
