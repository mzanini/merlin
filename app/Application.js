import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import AppPage from './containers/AppPage'
import MainPageHeader from './containers/MainPageHeader'
import store from './store'
import { loadGames } from './actions'
import { LOAD_GAMES } from './actionTypes'

const Application = () => {
  return(
    <React.Fragment>
      <CssBaseline />
      <MainPageHeader/>
      <AppPage/>
    </React.Fragment>
  )
}

store.dispatch(loadGames(LOAD_GAMES));

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.querySelector('#app'))

