import { connect } from 'react-redux'
import Character from '../components/character'

const mapStateToProps = state => {
  return {
    character: state.characters[0]
  }
}

const VisiblePlayingCharacter = connect(
  mapStateToProps
)(Character)

export default VisiblePlayingCharacter