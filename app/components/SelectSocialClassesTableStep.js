import React from 'react'
import SocialClassesTableSelector from '../containers/SocialClassesTableSelector'
import Typography from '@material-ui/core/Typography'

const SelectSocialClassesTableStep = () => (
  <React.Fragment>
    <Typography>
      Please select the file that contains the social classes you want to import
    </Typography>
    <SocialClassesTableSelector/>
  </React.Fragment>
)

export default SelectSocialClassesTableStep
