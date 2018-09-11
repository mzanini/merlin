import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteButton = ({ deleteAction }) => (
  <IconButton aria-label="Delete" onClick={() => deleteAction()}>
    <DeleteIcon/>
  </IconButton>
)

export default DeleteButton