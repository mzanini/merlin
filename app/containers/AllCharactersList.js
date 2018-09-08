import { connect } from 'react-redux'
import CharacterList from '../components/CharacterList'

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

const AllCharactersList = connect(
  mapStateToProps
)(CharacterList)

export default AllCharactersList