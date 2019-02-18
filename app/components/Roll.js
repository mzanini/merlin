import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import RollResult from './RollResult'

const styles = {
  root: {
    display: 'block',
    margin: 5,
  },
}

class Roll extends React.Component {
  constructor() {
    super()
    this.state = {
      faces: '4',
      adjust: 0,
      count: 1,
      rolls: [],
      defaultDie: 4,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeFaces = this.handleChangeFaces.bind(this)
    this.handleChangeDieAdjust = this.handleChangeDieAdjust.bind(this)
    this.handleChangeDieCount = this.handleChangeDieCount.bind(this)
    this.rollDie = this.rollDie.bind(this)
  }

  handleChangeFaces(event) {
    this.setState({ faces: event.target.value })
  }

  handleChangeDieAdjust(event) {
    this.setState({ adjust: event.target.value })
  }

  handleChangeDieCount(event) {
    this.setState({ count: event.target.value })
  }

  handleSubmit(event) {
    // Prevent default form behavior that posts to the server
    event.preventDefault()
    this.rollDie()
  }

  rollDie() {
    var newRolls = []
    for (var i = 0; i < this.state.count; i++) {
      newRolls.push(Math.floor((Math.random() * this.state.faces) + 1) + this.state.adjust)
    }

    let currentRolls = this.state.rolls
    currentRolls.push(newRolls)
    this.setState({ rolls: currentRolls })
  }

  removeRolls(index) {
    if (index > -1) {
      let newRolls = this.state.rolls.splice(index, 1)
      this.setState({ rollsß: newRolls })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.classes.root}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Faces</FormLabel>
            <RadioGroup
              aria-label='faces'
              name='faces'
              value={this.state.faces}
              onChange={this.handleChangeFaces}
            >
              <FormControlLabel value='4' control={<Radio />} label='4' />
              <FormControlLabel value='6' control={<Radio />} label='6' />
              <FormControlLabel value='8' control={<Radio />} label='8' />
              <FormControlLabel value='10' control={<Radio />} label='10' />
              <FormControlLabel value='12' control={<Radio />} label='12' />
            </RadioGroup>
          </FormControl>
          <TextField
            id="adjust"
            label="Adjust"
            value={this.state.adjust}
            onChange={this.handleChangeDieAdjust}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="numberOf"
            label="Number Of"
            value={this.state.count}
            onChange={this.handleChangeDieCount}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
          <Button variant="fab" color="primary" aria-label="Roll" onClick={(event) => this.handleSubmit(event)}>
            Roll
          </Button>
        </div>
        {
          this.state.rolls.length === 0
            ? null
            : this.state.rolls.map((singleRoll, index) => {
              return <RollResult key={index} rolls={singleRoll} onClose={() => this.removeRolls(index)} />
            })
        }
      </React.Fragment>
    )
  }
}

Roll.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Roll)
