import React from "react"
import { loadJSON } from "./utils.js"
import Character from "./character"
import CharacterModel from "./character-model"
import settings from 'electron-settings'

export default class MultiCharacterRolling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      charactersToRoll: 0
    };
    this.races = null;
    this.socialClasses = null;
    this.minorAbilities = null;

    this.rollAll = this.rollAll.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({charactersToRoll: event.target.value});
  }

  rollAll() {
    for(var i = 0; i < this.state.charactersToRoll; i++) {
      var character = new CharacterModel();
      character.pickRace(this.races);
      character.pickSocialClass(this.socialClasses);
      character.pickMinors(this.minorAbilities);
      character.pickStats();

      this.state.characters.push(character);
      this.setState({characters: this.state.characters});
    }
  }

  clearAll() {
    this.state.characters.length = [];
    this.setState({characters: this.state.characters});
  }

  updateRaces(response) {
    this.races = response;
  }

  updateSocialClasses(response) {
    this.socialClasses = response;
  }

  updateMinorAbilities(response) {
    this.minorAbilities = response;
  }

  componentWillMount() {
    settings.get('racesTablePath').then(value => { loadJSON(value, this.updateRaces.bind(this)) })
    settings.get('socialClassesTablePath').then(value => { loadJSON(value, this.updateSocialClasses.bind(this)) })
    settings.get('minorAbilititesTablePath').then(value => { loadJSON(value, this.updateMinorAbilities.bind(this)) })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
            Number of characters to roll:<input type="number" className="form-control" value={this.state.charactersToRoll} onChange={this.handleChange}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 btn-toolbar">
            <button type="button" className="btn btn-success btn-large" onClick={this.rollAll}>Roll</button>
            <button type="button" className="btn btn-warning btn-large" onClick={this.clearAll}>Clear</button>
          </div>
        </div>
        <div className="row">
          <ul className="list-group list-unstyled">
            {
              this.state.characters.map(function(character, index) {
                if(index%2 == 0 && index!=0)
                  return (<div key={index}><li className="clearfix"></li><li className="list-group-item col-lg-6 col-md-6 col-sm-6 col-xs-6"><Character character={character} name={index+1}/></li></div>);
                else
                  return (<li key={index} className="list-group-item col-lg-6 col-md-6 col-sm-6 col-xs-6"><Character character={character} name={index+1}/></li>);
            } )}
          </ul>
        </div>
      </div>
  )}
}
