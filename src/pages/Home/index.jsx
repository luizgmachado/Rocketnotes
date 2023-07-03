import { useState } from "react"

import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Note } from "../../components/Note"

export function Home() {
	return (
		<Container>
			<Brand>
				<h1>Rocketseat</h1>
			</Brand>

			<Header />

			<Menu>
				<li>
					<ButtonText title="Todos" isActive />
				</li>
				<li>
					<ButtonText title="Frontend" />
				</li>
				<li>
					<ButtonText title="Node" />
				</li>
				<li>
					<ButtonText title="React" />
				</li>
			</Menu>

			<Search>
				<Input placeholder="Pesquisar pelo título" icon={FiSearch} />
			</Search>

			<Content>
				<Section title="Minas Notas">
					<Note
						data={{
							title: "React",
							tags: [
								{ id: "1", name: "React" },
								{ id: "2", name: "Rocketseat" },
							],
						}}
					/>
				</Section>
			</Content>

			<NewNote to="/new">
				<FiPlus />
				Criar Nota
			</NewNote>
		</Container>
	)
}
