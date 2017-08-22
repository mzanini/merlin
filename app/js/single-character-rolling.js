import React from 'react';
import Character from "./character"
import CharacterModel from "./character-model"
import SocialClassesProbabilities from "./social-class-probabilities"
import RacesProbabilities from "./races-probabilities"
import MinorAbilitiesProbabilities from "./minor-abilities-probabilities"
import RollControl from "./roll-control"
import InfoColumn from "./info-column"
import { loadJSON, socialClassProbability } from "./utils.js"
import settings from 'electron-settings'
import JsonToCsvTranslator from './json-to-csv-translator'
import fs from 'fs'
import json2csv from 'json2csv'
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
    settings.get('racesTablePath').then(value => { loadJSON(value, this.updateRaces.bind(this)) })
    settings.get('socialClassesTablePath').then(value => { loadJSON(value, this.updateSocialClasses.bind(this)) })
    settings.get('minorAbilititesTablePath').then(value => { loadJSON(value, this.updateMinorAbilities.bind(this)) })
  }

  exportCurrentCharacter() {
      var result = json2csv({data: this.state.character})
      dialog.showSaveDialog({ filters:[{ name: 'CSV', extensions: ['csv'] }] },
        filename => {
         fs.writeFile(filename, result, err => { if(err){return console.log(err); }})
        })
  }

  render() {
    return (
      <div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><RollControl buttonsState = {this.state.buttonsState} rollRace={this.rollRace} rollSocialClass={this.rollSocialClass} rollMinors={this.rollMinors} rollStats={this.rollStats} rollAll={this.rollAll}/>
        <JsonToCsvTranslator clickThisBaby={this.exportCurrentCharacter}/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"><InfoColumn info={this.state.info}/></div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><Character character={this.state.character}/></div>
      </div>
    )
  }
}
