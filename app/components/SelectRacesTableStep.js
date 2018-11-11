import React from 'react'
import RacesTableSelector from '../containers/RacesTableSelector'
import Typography from '@material-ui/core/Typography'

const SelectRacesTableStep = () => (
  <React.Fragment>
    <Typography>
      Please select the file that contains the races you want to import
    </Typography>
    <RacesTableSelector/>
  </React.Fragment>
)

export default SelectRacesTableStep
