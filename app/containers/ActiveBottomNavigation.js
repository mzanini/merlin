import { connect } from 'react-redux'
import BottomGameNavigation from '../components/BottomGameNavigation'
import { showGamePage } from '../actions'
import { GAME_PAGE_CHARACTERS, GAME_PAGE_ROLL } from '../reducers'

const mapDispatchToProps = dispatch => {
  return {
    notifyChangedState: (newState) => {
      if(newState == 0)
        dispatch(showGamePage(GAME_PAGE_CHARACTERS))
      else
        dispatch(showGamePage(GAME_PAGE_ROLL))
    }
  }
}

const ActiveBottomNavigation = connect(
  null,
  mapDispatchToProps
)(BottomGameNavigation)

export default ActiveBottomNavigation