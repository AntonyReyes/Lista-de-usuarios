import './App.css'
import useGetUser from './hooks/useGetUser'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import { useState } from 'react'

function App() {

  const URL = 'http://144.126.218.162:8000/movies/'
  const { getAllUser, users } = useGetUser(URL)

  const [updateInfoUser, setUpdateInfoUser] = useState()

  const [isFormOpen, setIsFormOpen] = useState()

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => setIsFormOpen(false)

  return (
    <div className="App">
      <h1 className='title_proyect'>Users</h1>
      <button className='card_open_form' onClick={handleOpenForm}><h2 className='open_form_simbol'>+</h2>Create new user</button>
      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <UsersForm
          getAllUser={getAllUser}
          updateInfoUser={updateInfoUser}
          setUpdateInfoUser={setUpdateInfoUser}
          handleCloseForm={handleCloseForm}
        />
      </div>
      
      <div className='card-container'>
        {
          users?.map(user => (
            <UsersList
              key={user.id}
              user={user}
              getAllUser={getAllUser}
              setUpdateInfoUser={setUpdateInfoUser}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
