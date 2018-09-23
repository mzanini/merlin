import React from 'react'
import settings from 'electron-settings'
import constants from '../constants'
const { dialog } = require('electron').remote

export default class TablesSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      racesTablePath: null,
      socialClassesTablePath: null,
      minorAbilititesTablePath: null
    }

    this.openRacesTable = this.openRacesTable.bind(this)
    this.openSocialClassesTable = this.openSocialClassesTable.bind(this)
    this.openMinorAbilitiesTable = this.openMinorAbilitiesTable.bind(this)
  }

  openRacesTable() {
    dialog.showOpenDialog(
      { filters: [{ name: 'JSON', extensions: ['json'] }] },
      (fileNames) => {
        if (fileNames === undefined)
          return

        settings.set(constants.RACES_TABLE_PATH, fileNames[0])
        this.setState({ racesTablePath: fileNames[0] })
      })
  }

  openSocialClassesTable() {
    dialog.showOpenDialog(
      { filters: [ { name: 'JSON', extensions: ['json'] } ] },
      (fileNames) => {
        if (fileNames === undefined)
          return

        settings.set(constants.SOCIAL_CLASSES_TABLE_PATH, fileNames[0])
        this.setState({ socialClassesTablePath: fileNames[0] })
      })
  }

  openMinorAbilitiesTable() {
    dialog.showOpenDialog(
      { filters: [{ name: 'JSON', extensions: ['json'] }] },
      (fileNames) => {
        if (fileNames === undefined)
          return

        settings.set(constants.MINOR_ABILITIES_TABLE_PATH, fileNames[0])
        this.setState({ minorAbilititesTablePath: fileNames[0] })
      })
  }

  componentDidMount() {
    this.setState({ racesTablePath: settings.get(constants.RACES_TABLE_PATH) })
    this.setState({ socialClassesTablePath: settings.get(constants.SOCIAL_CLASSES_TABLE_PATH) })
    this.setState({ minorAbilititesTablePath: settings.get(constants.MINOR_ABILITIES_TABLE_PATH) })
  }

  render() {
    return (
      <table className='table'>
        <tbody>
          <tr>
            <td>Races table</td>
            <td>{ this.state.racesTablePath }</td>
            <td><button onClick={ this.openRacesTable }>select</button></td>
          </tr>
          <tr>
            <td>Social Classes table</td>
            <td>{this.state.socialClassesTablePath}</td>
            <td><button onClick={ this.openSocialClassesTable }>select</button></td>
          </tr>
          <tr>
            <td>Minor Abilities table</td>
            <td>{this.state.minorAbilititesTablePath}</td>
            <td><button onClick={ this.openMinorAbilitiesTable }>select</button></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
