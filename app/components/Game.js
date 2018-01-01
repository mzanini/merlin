import React from 'react';
import SingleCharacterRolling from "./single-character-rolling";

export default class Game extends React.Component {
  constructor() {
    super()
    
    this.addCharacter = this.addCharacter.bind(this)

    this.state = {
      characters: {}
    }
  }

  addCharacter(character) {
    const characters = this.state.characters
    characters[character.name] = character
    this.setState({ characters })
  }

  render() {
    return (
      <div>
        <ul>
          {
            Object.keys(this.state.characters)
              .map(name => <Character character={this.state.characters[name]}/>)
          }
        </ul>
        <SingleCharacterRolling/>
      </div>
    );
  }
}