import React from 'react'
import { withRouter } from 'react-router-dom'
import Character from './character'
import SingleCharacterRolling from "./single-character-rolling";

class Game extends React.Component {
  constructor() {
    super()
    
    this.addCharacter = this.addCharacter.bind(this)

    this.state = {
      gameName: ''
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

  render() {
    return (
      <div>
        <ul>
          {
            Object.keys(this.props.games[this.state.gameName].characters)
              .map(name => <Character key={name} character={this.props.games[this.state.gameName].characters[name]}/>)
          }
        </ul>
        <SingleCharacterRolling addCharacter={this.addCharacter}/>
      </div>
    );
  }
}

export default withRouter(Game)