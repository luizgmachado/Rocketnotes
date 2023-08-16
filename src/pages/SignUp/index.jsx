import { useState } from "react"
import { FiMail, FiLock, FiUserPlus } from "react-icons/fi"
import { Link, useNavigate} from "react-router-dom"

import { toast } from "react-toastify"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles"
export function SignUp() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate()

	function handleSignUp() {
		if(!name || !email || !password) {
			return toast.error("Preencha todos os campos")
		}
		
		api.post("/users", {
			name,
			email,
			password
		}).then(() => {
			toast.success("Conta criada com sucesso")
			navigate("/")
		}).catch(error => {
			if(error.response) {
				toast.error(error.response.data.message)
			} else {
				toast.error("Erro no cadastro")
			}
		})
	}

	return (
		<Container>
			<Background />
			<Form>
				<h1>Rocket Notes</h1>
				<p>Aplicação para salvar e gerenciar seus links úteis.</p>

				<h2>Cria sua conta</h2>

				<Input 
					placeholder="Nome" 
					type="text" 
					icon={FiUserPlus} 
					onChange={e => setName(e.target.value)} />
				<Input 
					placeholder="E-mail" 
					type="text" 
					icon={FiMail} 
					onChange={e => setEmail(e.target.value)} />
				<Input 
					placeholder="Senha" 
					type="password" 
					icon={FiLock} 
					onChange={e => setPassword(e.target.value)} />

				<Button title="Cadastrar" onClick={handleSignUp} />

				<Link to="/">Voltar para o Longin</Link>
			</Form>
		</Container>
	)
}
