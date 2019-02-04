import { connect } from 'react-redux'
import MultiSelect from '../components/MultiSelect'

const mapStateToProps = state => {
  return {
    placeHolder: 'Select a Social Class',
    optionsList: state.socialClasses,
    label: 'Social Class',
  }
}

const SocialClassSelect = connect(
  mapStateToProps
)(MultiSelect)

export default SocialClassSelect
