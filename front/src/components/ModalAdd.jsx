import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useAddUserMutation } from '../data/api/api'

export const ModalAdd = () => {
  const [first, setFirst] = useState()
  const [last, setLast] = useState()

  const [addUser, { isLoading }] = useAddUserMutation()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' disabled={isLoading} onClick={!isLoading ? handleShow : null}>
        {isLoading ? 'Adding…' : 'Add User'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter First and Last Name</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className='mb-3' controlId='firstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Brad'
                onChange={(e) => setFirst(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='lastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Pitt'
                onChange={(e) => setLast(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant='primary'
              onClick={() => {
                addUser({ first, last })
                handleClose()
              }}>
              Add User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
