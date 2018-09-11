import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

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
      <MenuList>
        <MenuItem onClick={ () => showGameList() }>
          Game List
        </MenuItem>
      </MenuList>
      </div>
    </Drawer>
  </React.Fragment>
)

export default Header