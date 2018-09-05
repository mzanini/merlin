import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import StarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button'

const Header = ({ name, drawerOpen, toggleDrawer, showGameList }) => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="Menu" onClick={ () => toggleDrawer(true) }>
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer open={drawerOpen} onClose={ () => toggleDrawer(false) }>
      <div
        tabIndex={0}
        role="button"
        onClick={ () => toggleDrawer(false) }
        onKeyDown={ () => toggleDrawer(false) }
      >
      <Button variant="contained" color="primary" onClick={ () => showGameList() }>
        <StarIcon/>
        Game List
      </Button>
      </div>
    </Drawer>
  </React.Fragment>
)

export default Header