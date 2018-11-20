import React from 'react'
import RacesTableSelector from './RacesTableSelector'
import TableSelectStep from '../components/TableSelectStep'

const SelectRacesTableStep = () => (
  <TableSelectStep helpText = 'Please select the file that contains the races you want to import'>
    <RacesTableSelector/>
  </TableSelectStep>
)

export default SelectRacesTableStep
