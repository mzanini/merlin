import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  grow: {
    flexGrow: 1
  }
}

const Header = ({ name, drawerOpen, toggleDrawer, showGameList, openSettings, classes }) => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="Menu" onClick={ () => toggleDrawer(true) }>
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
          {name}
        </Typography>
        <IconButton color="inherit" aria-label="Settings" onClick={ () => openSettings() }>
          <MoreVertIcon />
        </IconButton>
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

Header.propTypes = {
  name: PropTypes.string,
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  showGameList: PropTypes.func,
  openSettings: PropTypes.func,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
