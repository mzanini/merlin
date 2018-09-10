import { connect } from 'react-redux'
import GameList from '../components/GameList'
import { selectGame, deleteGame } from '../actions'

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectGame: id => {
      dispatch(selectGame(id))
    },
    deleteGame: id => {
      dispatch(deleteGame(id))
    }
  }
}

const AllGamesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList)

export default AllGamesList