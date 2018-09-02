import React from 'react'
import Character from './character'
import CharacterEdit from './CharacterEdit'
import SingleCharacterRolling from "./single-character-rolling"
import { ipcRenderer } from 'electron'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import StarIcon from '@material-ui/icons/Star'

export default class Game extends React.Component {
  constructor() {
    super()

    this.addCharacter = this.addCharacter.bind(this)
    this.showCharacter = this.showCharacter.bind(this)
    this.showEditCharacter = this.showEditCharacter.bind(this)
    this.editCharacter = this.editCharacter.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)

    this.state = {
      info: null,
      currentCharacterName: null,
      drawerOpen: false
    }
  }

  addCharacter(character) {
    this.props.addNewCharacter(this.props.game.name, character)
  }

  showCharacter(name) {
    const characterData = this.props.game.characters[name]
    const character = <Character name={characterData.name} race={characterData.race}
      socialClass={characterData.socialClass} stats={characterData.stats} minors={characterData.minors} showEditCharacter={this.showEditCharacter}/>
    this.setState({ info: character, currentCharacterName: characterData.name })
  }

  showEditCharacter(name) {
    const characterEdit = <CharacterEdit name={name} editCharacter={this.editCharacter}/>
    this.setState({ info: characterEdit })
  }

  editCharacter(propName, value) {
    const characters = {...this.props.game.characters}
    characters[this.state.currentCharacterName][propName] = value
    this.props.updateCharacter(this.props.game.name, this.state.currentCharacterName, characters[this.state.currentCharacterName])
  }

  toggleDrawer(open) {
    this.setState({ drawerOpen: open })
  }

  render() {
    return (
      <div  className="container-fluid">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="Menu" onClick={() => {this.toggleDrawer(true)}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              {this.props.game.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={() => {this.toggleDrawer(false)}}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => {this.toggleDrawer(false)}}
            onKeyDown={() => {this.toggleDrawer(false)}}
          >
          <Button variant="contained" color="primary" onClick={ () => {this.props.showGameList()} }>
            <StarIcon/>
            Game List
          </Button>
          </div>
        </Drawer>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <ul className="list-group">
              {
                Object.keys(this.props.game.characters)
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