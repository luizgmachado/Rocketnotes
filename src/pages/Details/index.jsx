import { Container } from './styles'
import { Button } from '../../components/Button'

export function Details() {
  return (
		<Container>
			<h1>Hello World!</h1>
			<span>Luiz Gustavo</span>
			
			<Button title="Enviar" loading/>
			<Button title="cadastrar"/>
			<Button title="Entrar"/>
		</Container>
	)
}
