import React from "react"
import fs from 'fs'
const {dialog} = require('electron').remote
import settings from 'electron-settings'

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
      { filters: [{ name: 'JSON', extensions: ['json']}] },
      (fileNames) => {
        if (fileNames === undefined)
          return;

        settings.set('racesTablePath', fileNames[0])
        this.setState({racesTablePath: fileNames[0]})
      })
  }

  openSocialClassesTable() {
    dialog.showOpenDialog(
      { filters: [{ name: 'JSON', extensions: ['json']}] },
      (fileNames) => {
        if (fileNames === undefined)
          return;

        settings.set('socialClassesTablePath', fileNames[0])
        this.setState({socialClassesTablePath: fileNames[0]});
      })
  }

  openMinorAbilitiesTable() {
    dialog.showOpenDialog(
      { filters: [{ name: 'JSON', extensions: ['json']}] },
      (fileNames) => {
        if (fileNames === undefined)
          return;

        settings.set('minorAbilititesTablePath', fileNames[0])
        this.setState({minorAbilititesTablePath: fileNames[0]});
      })
  }

  componentWillMount() {
    this.setState( {racesTablePath: settings.get('racesTablePath')} )
    this.setState( {socialClassesTablePath: settings.get('socialClassesTablePath')} )
    this.setState( {minorAbilititesTablePath: settings.get('minorAbilititesTablePath')} )
  }

  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td>Races table</td>
            <td>{this.state.racesTablePath}</td>
            <td><button onClick={this.openRacesTable}>select</button></td>
          </tr>
          <tr>
            <td>Social Classes table</td>
            <td>{this.state.socialClassesTablePath}</td>
            <td><button onClick={this.openSocialClassesTable}>select</button></td>
          </tr>
          <tr>
            <td>Minor Abilities table</td>
            <td>{this.state.minorAbilititesTablePath}</td>
            <td><button onClick={this.openMinorAbilitiesTable}>select</button></td>
          </tr>
        </tbody>
      </table>
    )
  }
}
