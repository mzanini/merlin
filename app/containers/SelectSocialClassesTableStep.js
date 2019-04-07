import React from 'react'
import SocialClassesTableSelector from './SocialClassesTableSelector'
import TableSelectStep from '../components/TableSelectStep'
import CurrentSocialClassesTable from './CurrentSocialClassesTable'

const SelectSocialClassesTableStep = () => (
  <TableSelectStep helpText = 'Please select the file that contains the social classes you want to import'>
    <SocialClassesTableSelector/>
    <CurrentSocialClassesTable/>
  </TableSelectStep>
)

export default SelectSocialClassesTableStep
