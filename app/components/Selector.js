import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import AddButton from './AddButton'
const { dialog } = require('electron').remote

const styles = {
  selector: {
    display: 'inline-block',
  },
}

class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: props.fileName,
    }

    this.selectFile = this.selectFile.bind(this)
  }

  selectFile() {
    dialog.showOpenDialog(
      { filters: [{ name: 'JSON', extensions: ['json'] }] },
      (fileNames) => {
        if (fileNames === undefined) {
          return
        }

        this.setState({ fileName: fileNames[0] })
        this.props.openSelectedFile(fileNames[0])
      })
  }

  render() {
    return (
      <div>
        <Typography className={this.props.classes.selector}>
          {this.state.fileName}
        </Typography>
        <AddButton addAction={this.selectFile} className={this.props.classes.selector}/>
      </div>
    )
  }
}

Selector.propTypes = {
  fileName: PropTypes.string,
  openSelectedFile: PropTypes.func,
  classes: PropTypes.object,
}

export default withStyles(styles)(Selector)
