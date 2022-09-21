import { useState } from 'react'
import { Button, Modal, Form, ListGroup } from 'react-bootstrap'
import { useDeleteUserMutation } from '../data/api/api'

export const ModalDelete = ({ id, first, last }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = () => {
    deleteUser(id)
    handleClose()
  }
  return (
    <>
      <Button variant='danger' disabled={isLoading} onClick={!isLoading ? handleShow : null}>
        {isLoading ? 'Deleting…' : 'Delete'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete this user?</Modal.Title>
        </Modal.Header>
        <Form>
          <ListGroup>
            <ListGroup.Item>{first}</ListGroup.Item>
            <ListGroup.Item>{last}</ListGroup.Item>
          </ListGroup>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              No
            </Button>
            <Button variant='primary' onClick={handleClick}>
              Yes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
