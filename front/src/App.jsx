import { Container, Table, Stack, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGetAllUsersQuery } from './data/api/api'
import { ModalAdd } from './components/modalAdd'
import { ModalDelete } from './components/ModalDelete'
import { ModalEdit } from './components/ModalEdit'
import { sort } from './data/sortFunctions'

function App() {
  const { data: users } = useGetAllUsersQuery()
  let sortedUsers
  if (!users) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    sortedUsers = sort(users)
  }

  return (
    <Container>
      <ModalAdd />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>
                <Stack direction='horizontal'>
                  {new Date(user.createdAt).toLocaleString()}
                  <div className='ms-auto'>
                    <ModalEdit id={user.id} first={user.name} last={user.surname} />{' '}
                    <ModalDelete id={user.id} first={user.name} last={user.surname} />
                  </div>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default App
