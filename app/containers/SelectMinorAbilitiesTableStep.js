import React from 'react'
import MinorAbilitiesTableSelector from './MinorAbilitiesTableSelector'
import TableSelectStep from '../components/TableSelectStep'

const SelectMinorAbilitiesTableStep = () => (
  <TableSelectStep helpText = 'Please select the file that contains the minor abilities you want to import'>
    <MinorAbilitiesTableSelector/>
  </TableSelectStep>
)

export default SelectMinorAbilitiesTableStep
