import CharacterModel from "../app/js/character-model.js";

test('pickRace picks a race randomly from given table', () => {
  var racesTable = new Array();
  racesTable.push({ name: "Human", probability: "1-500" });
  racesTable.push({ name: "Giant", probability: "500-999" });
  var character = new CharacterModel();
  character.pickRace(racesTable);
  expect(character.race).toBeDefined();
});

test('pickSocialClass picks a social class randomly from given table', () => {
  var socialClassesTable = new Array();
  socialClassesTable.push({race: "Human",
                           probabilities: [
                            {
                              name: "Peasant",
                              probability: "1-25"
                            },
                            {
                              name: "Lower Middle Class",
                              probability: "26-45"
                            },
                            {
                              name: "Middle Class",
                              probability: "46-74"
                            },
                            {
                              name: "Upper Middle Class",
                              probability: "75-87"
                            },
                            {
                              name: "Minor Nobility",
                              probability: "88-95"
                            },
                            {
                              name: "Major Nobility",
                              probability: "96-100"
                            }
                          ]});
  var character = new CharacterModel();
  character.race = "Human";
  character.pickSocialClass(socialClassesTable);
  expect(character.socialClass).toBeDefined();
});

test('pickSocialClass does not define socialClass if race is not present in table', () => {
  var socialClassesTable = new Array();
  socialClassesTable.push({race: "Human",
                           probabilities: [
                            {
                              name: "Peasant",
                              probability: "1-25"
                            },
                            {
                              name: "Lower Middle Class",
                              probability: "26-45"
                            },
                            {
                              name: "Middle Class",
                              probability: "46-74"
                            },
                            {
                              name: "Upper Middle Class",
                              probability: "75-87"
                            },
                            {
                              name: "Minor Nobility",
                              probability: "88-95"
                            },
                            {
                              name: "Major Nobility",
                              probability: "96-100"
                            }
                          ]});
  var character = new CharacterModel();
  character.race = "Teleman";
  character.pickSocialClass(socialClassesTable);
  expect(character.socialClass).toBeUndefined();
});

function generateMinorAbilitiesTable(availableAbilities) {
  var minorAbilitiesTable = Array();

  var item1 = Array();
  item1.chart = 1;
  item1.probability = "1-50";
  item1.abilities = Array();
  for(var i=0; i < 100; i++) {
    var abilityNumber = Math.floor(Math.random() * availableAbilities.length);
    var abilityName = availableAbilities[abilityNumber];
    item1.abilities.push( {name: abilityName, number:i+1} );
  }
  minorAbilitiesTable.push(item1);

  var item2 = Array();
  item2.chart = 2;
  item2.probability = "51-100";
  item2.abilities = Array();
  for(var i=0; i < 100; i++) {
    var abilityNumber = Math.floor(Math.random() * availableAbilities.length);
    var abilityName = availableAbilities[abilityNumber];
    item2.abilities.push( {name: abilityName, number:i+1} );
  }
  minorAbilitiesTable.push(item2);

  return minorAbilitiesTable;
}

function isAvailable(ability, available) {
  for(var i = 0; i < available.length; i++) {
    if( ability == available[i] )
      return true;
  }

  return false;
}

function areAmongDefined(available, minors) {
  for(var i = 0; i < minors.length; i++) {
    if(isAvailable(minors[i], available))
      available.splice(available.indexOf(minors[i]), 1);
    else
      return false;
  }

  return true;
}

test('pickMinors assigns a certain number of minor abilities selected from the table without duplicating', () => {
  var character = new CharacterModel();
  character.race = "Human";
  character.socialClass = "Peasant";

  var availableAbilities = ["Artist", "Lucky", "Smith", "Plumber"];
  character.pickMinors( generateMinorAbilitiesTable(availableAbilities) );

  console.log("Minor abilities: " + JSON.stringify(character.minors));
  var minorAbilitiesSelected = (character.minors.length == 0 || (character.minors.length > 0 && (areAmongDefined(availableAbilities, character.minors))));
  expect(minorAbilitiesSelected).toBe(true);
});

test('pickMinors resets the number of minor abilities on subsequent calls', () => {
  var character = new CharacterModel();
  character.race = "Human";
  character.socialClass = "Peasant";
  character.minors = [ "Artist"];

  var availableAbilities = ["Artist", "Lucky", "Smith", "Plumber"];
  character.pickMinors( generateMinorAbilitiesTable(availableAbilities) );

  console.log("Minor abilities: " + JSON.stringify(character.minors));
  var minorAbilitiesSelected = (character.minors.length == 0 || (character.minors.length > 0 && (areAmongDefined(availableAbilities, character.minors))));
  expect(minorAbilitiesSelected).toBe(true);
});

test('pickStats rolls random stats', () => {
  var character = new CharacterModel();
  character.race = "Human";
  character.socialClass = "Peasant";

  character.pickStats();

  expect(character.stats.strength).toBeGreaterThanOrEqual(4);
  expect(character.stats.strength).toBeLessThanOrEqual(24);
  expect(character.stats.intelligence).toBeGreaterThanOrEqual(4);
  expect(character.stats.intelligence).toBeLessThanOrEqual(24);
  expect(character.stats.wisdom).toBeGreaterThanOrEqual(4);
  expect(character.stats.wisdom).toBeLessThanOrEqual(24);
  expect(character.stats.charisma).toBeGreaterThanOrEqual(4);
  expect(character.stats.charisma).toBeLessThanOrEqual(24);
  expect(character.stats.constitution).toBeGreaterThanOrEqual(4);
  expect(character.stats.constitution).toBeLessThanOrEqual(24);
  expect(character.stats.dexterity).toBeGreaterThanOrEqual(4);
  expect(character.stats.dexterity).toBeLessThanOrEqual(24);
});
