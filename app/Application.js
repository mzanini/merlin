import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import AppPage from './containers/AppPage'
import MainPageHeader from './containers/MainPageHeader'
import store from './store'
import { loadGames, loadCharacters } from './actions'

const Application = () => {
  return(
    <React.Fragment>
      <CssBaseline />
      <MainPageHeader/>
      <AppPage/>
    </React.Fragment>
  )
}

store.dispatch(loadGames())
store.dispatch(loadCharacters())

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.querySelector('#app'))

