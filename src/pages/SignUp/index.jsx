import {FiMail, FiLock, FiUserPlus } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Container, Form, Background } from "./styles";
export function SignUp() {
  return (
		<Container>
			<Background />
			<Form>
				<h1>Rocket Notes</h1>
				<p>Aplicação para salvar e gerenciar seus links úteis.</p>

				<h2>Cria sua conta</h2>

				<Input placeholder="Nome" type="text" icon={FiUserPlus} />
				<Input placeholder="E-mail" type="text" icon={FiMail} />
				<Input placeholder="Senha" type="password" icon={FiLock} />

				<Button title="Cadastrar" />

				<a href="#">Voltar para o Longin</a>
			</Form>
		</Container>
	)
}