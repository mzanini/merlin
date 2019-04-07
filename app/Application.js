import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import AppPage from './containers/AppPage'
import MainPageHeader from './containers/MainPageHeader'
import store from './store'
import { loadGames, loadCharacters, loadRaces, loadSocialClasses, loadMinorAbilities, loaduiProperties } from './actions'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'

const Application = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MainPageHeader/>
      <AppPage/>
    </MuiThemeProvider>
  )
}

store.dispatch(loadGames())
store.dispatch(loadCharacters())
store.dispatch(loadRaces())
store.dispatch(loadSocialClasses())
store.dispatch(loadMinorAbilities())
store.dispatch(loaduiProperties())

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.querySelector('#app'))
