import React from 'react'
import PropTypes from 'prop-types'
import ActiveGamePage from '../containers/ActiveGamePage'
import GamesPage from './GamesPage'
import Settings from './Settings'
import SetupStepper from './SetupStepper'

const Page = ({ selectedGameId, settingsOpen, setupCompleted }) => {
  if (setupCompleted) {
    if (settingsOpen) {
      return <Settings/>
    } else if (typeof selectedGameId !== 'undefined' && selectedGameId !== null) {
      return <ActiveGamePage/>
    } else {
      return <GamesPage/>
    }
  } else {
    return <SetupStepper/>
  }
}

Page.propTypes = {
  selectedGameId: PropTypes.number,
  settingsOpen: PropTypes.bool,
}

export default Page
