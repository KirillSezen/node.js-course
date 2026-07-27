import {useContext, useState, type FC} from 'react'
import { Context } from '../main'
import { observer } from 'mobx-react-lite'

const LoginForm : FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const {store} = useContext(Context)

	return (
		<>
			<div>LoginForm</div>
			<div>
				<input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='email: '/>
				<input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='password: '/>
				<button onClick={() => store.login(email, password)}>Логин</button>
				<button onClick={() => store.registration(email, password)}>Регистрация</button>
			</div>
		</>
		
	)
}

export default observer(LoginForm)