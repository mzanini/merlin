function extractProbabilityString(arrayToParse, name) {
  for (var i = 0; i < arrayToParse.length; i++) {
    if (arrayToParse[i].name === name)
      return arrayToParse[i].probability
  }
}

function extractProbability(stringToParse) {
  return { min: stringToParse.split('-')[0], max: stringToParse.split('-')[1] }
}

function matches(roll, probability) {
  if (roll >= probability.min && roll <= probability.max)
    return true
  else
    return false
}

function socialClassProbability(scProbabilities, raceName) {
  raceName = extractRace(raceName)
  for (var i = 0; i < scProbabilities.length; i++) {
    if (scProbabilities[i].race === raceName)
      return scProbabilities[i].probabilities
  }
}

function rollDie(maxValue) {
  return Math.floor(Math.random() * maxValue + 1)
}

function rollFourSixSidedDie() {
  return Math.floor(Math.random() * 20 + 4 + 1)
}

function rollPercentile() {
  return Math.floor(Math.random() * 100 + 1)
}

function loadJSON(file, callback) {
  // $.getJSON(file, function(response){ callback(response) })
}

function extractRace(fullName) {
  var lastCharacter = fullName.slice(-1)
  while (!isNaN(lastCharacter) || lastCharacter === ' ' || lastCharacter === '+') {
    fullName = fullName.slice(0, fullName.length - 1)
    lastCharacter = fullName.slice(-1)
  }

  return fullName
}

export { extractProbabilityString, extractProbability, matches, socialClassProbability, rollDie, rollPercentile, rollFourSixSidedDie, loadJSON, extractRace }
