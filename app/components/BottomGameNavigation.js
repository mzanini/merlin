import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PeopleOutline from '@material-ui/icons/PeopleOutline'
import CasinoOutlined from '@material-ui/icons/CasinoOutlined'

class BottomGameNavigation extends Component {
  constructor() {
    super()
    this.state = {value: 0}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, newValue) {
    this.props.notifyChangedState(newValue)
    this.setState({value: newValue})
  }

  render() {
    return(
      <BottomNavigation
        value={this.state.value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Characters" icon={<PeopleOutline />} />
        <BottomNavigationAction label="Roll" icon={<CasinoOutlined />} />
      </BottomNavigation>
    )
  }
}

export default BottomGameNavigation