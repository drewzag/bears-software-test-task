import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useEditUserMutation } from '../data/api/api'

export const ModalEdit = ({ id, first, last }) => {
  const [name, setName] = useState(first)
  const [surname, setSurname] = useState(last)
  const [editUser, { isLoading }] = useEditUserMutation()

  const [show, setShow] = useState(false)
  const handleClose = () => {
    setName(first)
    setSurname(last)
    setShow(false)
  }
  const handleShow = () => setShow(true)

  const handleClick = () => {
    editUser({ id, name, surname })
    setShow(false)
  }
  return (
    <>
      <Button variant='warning' disabled={isLoading} onClick={!isLoading ? handleShow : null}>
        {isLoading ? 'Saving…' : 'Edit'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete this user?</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className='mb-3' controlId='firstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleClick}>
              Confirm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
