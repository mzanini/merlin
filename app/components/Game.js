import React from 'react'
import { withRouter } from 'react-router-dom'
import BrowserWindow from 'electron'
import Character from './character'
import SingleCharacterRolling from "./single-character-rolling"
import { ipcRenderer } from 'electron'
import Button from '@material-ui/core/Button'

class Game extends React.Component {
  constructor() {
    super()

    this.addCharacter = this.addCharacter.bind(this)
    this.showCharacter = this.showCharacter.bind(this)

    this.state = {
      gameName: '',
      info: null
    }
  }

  componentWillMount() {
    var path = this.props.history.location.pathname.split('/')
    this.setState({ gameName: path[path.length - 1]})
  }

  addCharacter(character) {
    const characters = {...this.props.games[this.state.gameName].characters}
    characters[character.name] = character
    this.props.addNewCharacter(this.state.gameName, character)
  }

  showCharacter(name) {
    const character = <Character character={this.props.games[this.state.gameName].characters[name]}/>
    this.setState({ info: character })
  }

  render() {
    return (
      <div  className="container-fluid">
        <div className="row text-center">
          <span className="badge badge-info">{this.state.gameName}</span>
        </div>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <button type="button" className="btn btn-primary" onClick={() => {this.props.history.push('/')} }>Game List -></button>
            <ul className="list-group">
              {
                Object.keys(this.props.games[this.state.gameName].characters)
                  .map(name => <button key={name} name={name} onClick={() => {this.showCharacter(name)} } className="list-group-item list-group-item-action">{name}</button>)
              }
            </ul>
            <SingleCharacterRolling addCharacter={this.addCharacter}/>
            <Button variant="contained" color="primary" onClick={() => {event.preventDefault(); ipcRenderer.send('open-roll')} }>Roll</Button>
          </div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
            {this.state.info}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Game)