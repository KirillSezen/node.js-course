import {useContext, useEffect, useState, type FC} from 'react'
import LoginForm from './components/LoginForm'
import { Context } from './main'
import { observer } from 'mobx-react-lite'
import { type IUser } from './models/response/IUser'
import UserService from './services/UserService'

const App: FC = () => {

  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  if(store.isLoading) {
    return (
      <div>
        Загрузка....
      </div>
    )
  }

  if(!store.isAuth) {
    return (
      <>
      <LoginForm/>
      </>
    )
  }

  return (
    <div>
      <h1>{store.isAuth ? `Пользователь ${store.user.email} авторизован` : "Пользователь не авторизован"}</h1>
      <h1>{store.user.isActivated ? `аккаунт подтверждён` : "активируйте аккаунт"}</h1>
      <button onClick={() => store.logout()}>Выйти</button>

      <div>
        <button onClick={() => getUsers()}>
          Получить пользователей
        </button>
      </div>

      <div>
        <ol>
          {users.map(user => 
              <li key={user.email}>{user.email}</li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default observer(App)
