import { connect } from 'react-redux'
import Header from '../components/Header'
import { toggleDrawer, showGameList } from '../actions'

const mapStateToProps = state => {
  var title = 'Games List'
  if(typeof state.selectedGame != 'undefined' && state.selectedGame != null) {
    title = state.games[state.selectedGame].name
  }

  return {
    name: title,
    drawerOpen: state.drawerOpen
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