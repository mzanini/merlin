import React from 'react'
import { shallow } from 'enzyme'
import SingleCharacterRolling from '../app/components/single-character-rolling'
import settings from 'electron-settings'
import constants from '../app/constants'

beforeAll(() => {
  settings.get = (settingName) => {
    switch(settingName) {
      case constants.RACES_TABLE_PATH:
        return './test/data/races.json'
      case constants.SOCIAL_CLASSES_TABLE_PATH:
        return './test/data/social-classes.json'
      case constants.MINOR_ABILITIES_TABLE_PATH:
        return './test/data/minor-abilities.json'
      default:
        return 'setting not found'
    }
  }
})

test('loads tables when component mounts', () => {
  const scr = shallow(<SingleCharacterRolling/>)
  expect(scr.instance().races).toEqual([{"name": "Human", "probability": "1-500"}, {"name": "Troll", "probability": "501-1000"}])
  expect(scr.instance().socialClasses).toEqual({"probabilities": [{"name": "Peasant", "probability": "1-90"}, {"name": "Nobility", "probability": "90-100"}], "race": "Human"})
  expect(scr.instance().minorAbilities).toEqual([{"abilities": [{"name": "Artist", "number": "1"}, {"name": "Smith", "number": "2"}], "chart": "1", "probability": "1-45"}])
})