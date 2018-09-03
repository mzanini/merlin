import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const AddButton = ({ addAction }) => (
  <Button variant="fab" color="primary" aria-label="Add" onClick={() => addAction()}>
    <AddIcon />
  </Button>
)

export default AddButton