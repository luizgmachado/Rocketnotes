import { useState } from "react"
import {
	FiArrowLeft,
	FiUser,
	FiMail,
	FiLock,
	FiUnlock,
	FiCamera,
} from "react-icons/fi"

import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
	const { user, UpdateProfile } = useAuth()
	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [passwordOld, setPasswordOld] = useState()
	const [passwordNew, setPasswordNew] = useState()

	async function handleUpdateProfile() {
		const user = {
			name,
			email,
			password: passwordNew,
			old_password: passwordOld,
		}
		await UpdateProfile({ user })
	}

	return (
		<Container>
			<header>
				<Link to="/">
					<FiArrowLeft />
				</Link>
			</header>

			<Form>
				<Avatar>
					<img
						src="https://github.com/luizgmachado.png"
						alt="Foto do usuário"
					/>

					<label htmlFor="avatar">
						<FiCamera />
						<input type="file" id="avatar" />
					</label>
				</Avatar>
				<Input
					placeholder="Nome"
					type="text"
					icon={FiUser}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder="E-mail"
					type="text"
					icon={FiMail}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="Senha atual"
					type="password"
					icon={FiUnlock}
					onChange={(e) => setPasswordOld(e.target.value)}
				/>
				<Input
					placeholder="Nova Senha"
					type="password"
					icon={FiLock}
					onChange={(e) => setPasswordNew(e.target.value)}
				/>

				<Button title="Salvar" onClick={handleUpdateProfile} />
			</Form>
		</Container>
	)
}
