import React from 'react';
import Character from "./character"
import CharacterModel from "./character-model"
import SocialClassesProbabilities from "./social-class-probabilities"
import RacesProbabilities from "./races-probabilities"
import MinorAbilitiesProbabilities from "./minor-abilities-probabilities"
import RollControl from "./roll-control"
import InfoColumn from "./info-column"
import socialClassProbability from "./utils.js"
import settings from 'electron-settings'
import fs from 'fs'
import json2csv from 'json2csv'
import constants from '../constants'
const {dialog} = require('electron').remote

export default class SingleCharacterRolling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: new CharacterModel(),
      buttonsState: {
        racesTableReady: false,
        socialClassesTableReady: false,
        minorsTableReady: false
      },
      info: null
    };
    this.races = null;
    this.socialClasses = null;
    this.minorAbilities = null;

    this.rollRace = this.rollRace.bind(this);
    this.rollSocialClass = this.rollSocialClass.bind(this);
    this.rollMinors = this.rollMinors.bind(this);
    this.rollStats = this.rollStats.bind(this);
    this.rollAll = this.rollAll.bind(this);
    this.exportCurrentCharacter = this.exportCurrentCharacter.bind(this)
    this.addCharacter = this.addCharacter.bind(this)
  }

  rollRace() {
    this.state.character.pickRace(this.races);
    this.setState( {character: this.state.character} );

    var probability = socialClassProbability(this.socialClasses, this.state.character.race);
    this.setState( {info: <SocialClassesProbabilities probabilities={probability}/>} );
  }

  rollSocialClass() {
    this.state.character.pickSocialClass(this.socialClasses);
    this.setState( {character: this.state.character} );

    this.setState( {info: <MinorAbilitiesProbabilities charts={this.minorAbilities}/>} );
  }

  rollMinors() {
    this.state.character.pickMinors(this.minorAbilities);
    this.setState( {character: this.state.character} );
  }

  rollStats() {
    this.state.character.pickStats();
    this.setState( {character: this.state.character} );
  }

  rollAll() {
    this.rollRace();
    this.rollSocialClass();
    this.rollMinors();
    this.rollStats();
    this.state.character.randomName();
  }

  updateRaces(response) {
    this.races = response;
    this.state.buttonsState.racesTableReady =  true;
    this.setState( {buttonsState: this.state.buttonsState} );
    this.setState( {info: <RacesProbabilities probabilities={this.races}/> } );
  }

  updateSocialClasses(response) {
    this.socialClasses = response;
    this.state.buttonsState.socialClassesTableReady = true;
    this.setState({buttonsState: this.state.buttonsState});
  }

  updateMinorAbilities(response) {
    this.minorAbilities = response;
    this.state.buttonsState.minorsTableReady = true;
    this.setState( {buttonsState: this.state.buttonsState} );
  }

  componentWillMount() {
    this.races = JSON.parse(fs.readFileSync(settings.get(constants.RACES_TABLE_PATH)))
    this.socialClasses = JSON.parse(fs.readFileSync(settings.get(constants.SOCIAL_CLASSES_TABLE_PATH)))
    this.minorAbilities = JSON.parse(fs.readFileSync(settings.get(constants.MINOR_ABILITIES_TABLE_PATH)))

    const state = this.state
    state.character = new CharacterModel()
    this.setState({ state })
  }

  exportCurrentCharacter() {
      var result = json2csv({data: this.state.character})
      dialog.showSaveDialog({ filters:[{ name: 'CSV', extensions: ['csv'] }] },
        filename => {
         fs.writeFile(filename, result, err => { if(err){return console.log(err); }})
        })
  }

  createCharacter(event) {
    event.preventDefault()
    const character = new CharacterModel();
    character.randomName()
    character.pickRace(this.races)
    character.pickSocialClass(this.socialClasses)
    character.pickMinors(this.minorAbilities)
    character.pickStats()
    this.props.addCharacter(character)
  }

  addCharacter(event) {
    event.preventDefault()
    this.rollAll()
    this.props.addCharacter(this.state.character)
    this.characterForm.reset()
  }

  render() {
    return (
      <form ref={(input) => this.characterForm = input} onSubmit={(e) => this.createCharacter(e)}>
        <button type="submit">+ Add Character</button>
      </form>
    )
  }
}
