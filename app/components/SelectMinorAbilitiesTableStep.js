import React from 'react'
import Typography from '@material-ui/core/Typography'
import MinorAbilitiesTableSelector from '../containers/MinorAbilitiesTableSelector'

const SelectMinorAbilitiesTableStep = () => (
  <React.Fragment>
    <Typography>
      Please select the file that contains the minor abilities you want to import
    </Typography>
    <MinorAbilitiesTableSelector/>
  </React.Fragment>
)

export default SelectMinorAbilitiesTableStep
