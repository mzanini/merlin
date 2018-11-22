import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import EditStat from './EditStat'
import Button from '@material-ui/core/Button'
import CachedIcon from '@material-ui/icons/Cached'
import { rollFourSixSidedDie } from '../utils.js'

class CharacterEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = { character: props.character }
    this.onStatChange = this.onStatChange.bind(this)
    this.onClose = this.onClose.bind(this)
    this.rollStats = this.rollStats.bind(this)
  }

  onStatChange(event, label) {
    let currentCharacter = this.state.character
    const newValue = parseInt(event.target.value)
    switch (label) {
      case 'Strength':
        currentCharacter.strength = newValue
        break
      case 'Intelligence':
        currentCharacter.intelligence = newValue
        break
      case 'Wisdom':
        currentCharacter.wisdom = newValue
        break
      case 'Constitution':
        currentCharacter.constitution = newValue
        break
      case 'Dexterity':
        currentCharacter.dexterity = newValue
        break
      case 'Charisma':
        currentCharacter.charisma = newValue
        break
      default:
        break
    }

    this.setState({ character: currentCharacter })
  }

  rollStats() {
    let currentCharacter = this.state.character

    currentCharacter.strength = rollFourSixSidedDie()
    currentCharacter.intelligence = rollFourSixSidedDie()
    currentCharacter.wisdom = rollFourSixSidedDie()
    currentCharacter.constitution = rollFourSixSidedDie()
    currentCharacter.dexterity = rollFourSixSidedDie()
    currentCharacter.charisma = rollFourSixSidedDie()
    this.setState({ character: currentCharacter })
  }

  onClose() {
    this.props.updateCharacter(this.state.character)
    this.props.closeCharacterEditModal()
  }

  render() {
    return (
      <Dialog
        open={this.props.isOpen}
        onClose={ () => this.onClose() }
        aria-labelledby="form-dialog-title"
        onKeyPress={ (e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            this.onClose()
          }
        }}
      >
        <DialogTitle id="form-dialog-title">
          {this.state.character.name}
          <Button onClick={ () => this.rollStats() } color="primary">
            <CachedIcon/>
          </Button>
        </DialogTitle>
        <DialogContent>
          <EditStat label="Strength" value={this.state.character.strength} onChange={this.onStatChange}/>
          <EditStat label="Intelligence" value={this.state.character.intelligence} onChange={this.onStatChange}/>
          <EditStat label="Wisdom" value={this.state.character.wisdom} onChange={this.onStatChange}/>
          <EditStat label="Constitution" value={this.state.character.constitution} onChange={this.onStatChange}/>
          <EditStat label="Dexterity" value={this.state.character.dexterity} onChange={this.onStatChange}/>
          <EditStat label="Charisma" value={this.state.character.charisma} onChange={this.onStatChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => this.onClose() } color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

CharacterEditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  character: PropTypes.object.isRequired,
  updateCharacter: PropTypes.func.isRequired,
  closeCharacterEditModal: PropTypes.func.isRequired,
}

export default CharacterEditModal
