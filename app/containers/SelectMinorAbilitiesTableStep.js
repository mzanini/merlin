import React from 'react'
import MinorAbilitiesTableSelector from './MinorAbilitiesTableSelector'
import TableSelectStep from '../components/TableSelectStep'
import CurrentMinorAbilitiesTable from './CurrentMinorAbilitiesTable'

const SelectMinorAbilitiesTableStep = () => (
  <TableSelectStep helpText = 'Please select the file that contains the minor abilities you want to import'>
    <MinorAbilitiesTableSelector/>
    <CurrentMinorAbilitiesTable/>
  </TableSelectStep>
)

export default SelectMinorAbilitiesTableStep
