import { connect } from 'react-redux'
import Selector from '../components/Selector'
import { loadSocialClassesTable } from '../actions'

const mapStateToProps = state => {
  return {
    fileName: state.socialClasses.tablePath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openSelectedFile: fileName => {
      dispatch(loadSocialClassesTable(fileName))
    },
  }
}

const SocialClassesTableSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector)

export default SocialClassesTableSelector
