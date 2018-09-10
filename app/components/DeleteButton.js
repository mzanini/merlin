import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const DeleteButton = ({ deleteAction }) => (
  <Button variant="fab" color="primary" aria-label="Add" onClick={() => deleteAction()}>
    <DeleteIcon/>
  </Button>
)

export default DeleteButton