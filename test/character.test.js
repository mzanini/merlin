import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Character from '../app/components/character'

function rowWithCell(shallowRenderedCharacter, cellName) {
  const cssSelector = 'WithStyles(TableCell)[children="' + cellName +'"] + WithStyles(TableCell)'
  return shallowRenderedCharacter.find(cssSelector).children().text()
}

test('Renders stats in a table', () => {
  let shallow = createShallow()

  const stats = {
    strength: 15,
    intelligence: 11,
    wisdom: 17,
    constitution: 15,
    dexterity: 18,
    charisma: 19
  }
  const character = shallow(<Character stats={stats}/>)
  expect(rowWithCell(character, 'Strength')).toEqual("15");
  expect(rowWithCell(character, 'Intelligence')).toEqual("11");
  expect(rowWithCell(character, 'Wisdom')).toEqual("17");
  expect(rowWithCell(character, 'Constitution')).toEqual("15");
  expect(rowWithCell(character, 'Dexterity')).toEqual("18");
  expect(rowWithCell(character, 'Charisma')).toEqual("19");
})