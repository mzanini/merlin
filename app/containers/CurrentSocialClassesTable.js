import { connect } from 'react-redux'
import SocialClassesTable from '../components/SocialClassesTable'

const mapStateToProps = state => {
  return {
    socialClasses: state.socialClasses,
  }
}

const CurrentSocialClassesTable = connect(
  mapStateToProps
)(SocialClassesTable)

export default CurrentSocialClassesTable
