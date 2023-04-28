import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
		<Container>
			<Header />

			<main>
				<Content>
					<ButtonText title="Excluir Nota" />

					<h1>Introdução ao React</h1>

					<p>
						React é uma biblioteca JavaScript de código aberto usada para
						construir interfaces de usuário. Ela foi criada pelo Facebook e
						lançada em 2013. Desde então, tornou-se uma das bibliotecas mais
						populares para o desenvolvimento de aplicativos web e móveis. O
						React é baseado em componentes, o que significa que as interfaces
						são divididas em partes menores e independentes chamadas de
						componentes. Cada componente pode ter seu próprio estado e
						comportamento, permitindo que os desenvolvedores construam
						interfaces complexas e interativas de forma modular e escalável.
					</p>

					<Section title="Links úteis">
						<Links>
							<li>
								<a href="#">https://www.rocketseat.com.br/</a>
							</li>
							<li>
								<a href="#">https://www.rocketseat.com.br/</a>
							</li>
						</Links>
					</Section>

					<Section title="Marcadores">
						<Tag title="Express" />
						<Tag title="NodeJS" />
					</Section>

					<Button title="Voltar" loading={false} />
				</Content>
			</main>
		</Container>
	)
}
