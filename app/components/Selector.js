import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import AddButton from './AddButton'
const { dialog } = require('electron').remote

export default class Selector extends Component {
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
        <Typography>
          {this.state.fileName}
        </Typography>
        <AddButton addAction={this.selectFile}/>
      </div>
    )
  }
}

Selector.propTypes = {
  fileName: PropTypes.string,
  openSelectedFile: PropTypes.func,
}
