import { matches, extractProbability, socialClassProbability, rollPercentile, rollFourSixSidedDie } from "./utils.js"

export default class CharacterModel {
  constructor() { this.name = ""; }

  pickRace(racesTable) {
    var raceRoll = Math.floor(Math.random() * 1000 + 1);
    for(var i = 0; i < racesTable.length; i++) {
      if( matches(raceRoll, extractProbability(racesTable[i].probability)) ) {
        this.race = racesTable[i].name;
        break;
      }
    }
  }

  pickSocialClass(socialClassesTable) {
    var probabilities = socialClassProbability(socialClassesTable, this.race);
    if(!probabilities)
      return;

    var scRoll = Math.floor(Math.random() * 100 + 1);
    for(var i = 0; i < probabilities.length; i++) {
        if( matches(scRoll, extractProbability(probabilities[i].probability)) ) {
          this.socialClass = probabilities[i].name;
          break;
        }
    }
  }

  pickMinors(minorAbilitiesTable) {
    var numMinors = this.rollNumMinors();

    var minors = [];
    for(var i = 0; i < numMinors; i++) {
      var chartRoll = rollPercentile();
      var selectedChart;
      for(var i = 0; i < minorAbilitiesTable.length; i++) {
        if(matches(chartRoll, extractProbability(minorAbilitiesTable[i].probability))) {
          selectedChart = minorAbilitiesTable[i];
          break;
        }
      }

      var abilityRoll = rollPercentile();
      var selectedAbility;
      for(var i = 0; i < selectedChart.abilities.length; i++) {
        if(abilityRoll == selectedChart.abilities[i].number)
          selectedAbility = selectedChart.abilities[i].name;
      }

      minors.push(selectedAbility);
    }

    this.minors = minors;
  }

  pickStats() {
    this.stats = {};

    this.stats.strength = rollFourSixSidedDie();
    this.stats.intelligence = rollFourSixSidedDie();
    this.stats.wisdom = rollFourSixSidedDie();
    this.stats.constitution = rollFourSixSidedDie();
    this.stats.dexterity = rollFourSixSidedDie();
    this.stats.charisma = rollFourSixSidedDie();
  }

  rollNumMinors() {
    var numMinors = 0;
    var roll = rollPercentile();
    while(roll >= 75) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 80) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 85) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 90) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 95) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 98) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 99) {
      numMinors++;
      roll = rollPercentile();
    }

    roll = rollPercentile();
    while(roll >= 100) {
      numMinors++;
      roll = rollPercentile();
    }

    return numMinors;
  }
}
