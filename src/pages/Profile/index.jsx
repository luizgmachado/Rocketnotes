/** @format */

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

	const [avatar, setAvatar] = useState(user.avatar)
  const [avatarFile, setAvatarFile] = useState(null)


	async function handleUpdateProfile() {
		const user = {
			name,
			email,
			password: passwordNew,
			old_password: passwordOld,
		}
		await UpdateProfile({ user, avatarFile })
	}

  function handleChangeAvatar(e) {
    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
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
					<img src={avatar} alt="Foto do usuário" />

					<label htmlFor="avatar">
						<FiCamera />
						<input 
              type="file" 
              id="avatar" 
              onChange={handleChangeAvatar} 
            />
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
