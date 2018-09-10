import { connect } from 'react-redux'
import Header from '../components/Header'
import { toggleDrawer, showGameList } from '../actions'

const mapStateToProps = state => {
  var title = 'Games List'
  if(typeof state.ui.selectedGameId != 'undefined' && state.ui.selectedGameId != null) {
    title = state.games.find((game) => game.id === state.ui.selectedGameId).name
  }

  return {
    name: title,
    drawerOpen: state.ui.drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: drawerOpen => {
      dispatch(toggleDrawer(drawerOpen))
    },
    showGameList: () => {
      dispatch(showGameList())
    }
  }
}

const MainPageHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default MainPageHeader