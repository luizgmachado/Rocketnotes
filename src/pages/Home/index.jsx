import { useState, useEffect } from "react"
import { FiPlus, FiSearch } from "react-icons/fi"

import { api } from "../../services/api"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Note } from "../../components/Note"

export function Home() {
	const [tags, setTags] = useState([])
	const [tagsSelected, setTagsSelected] = useState([])
	

	function handleTagsSelected(tagName) {
		const isAlreadySelected = tagsSelected.includes(tagName)

		if (isAlreadySelected) {
			const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
			setTagsSelected(filteredTags)
		} else {
			setTagsSelected((prevState) => [...prevState, tagName])
		}
	}

	
	useEffect(() => {
		async function fetchTags() {
			const response = await api.get("/tags")
			setTags(response.data)
		}

		fetchTags()
	}, [])


	return (
		<Container>
			<Brand>
				<h1>Rocketseat</h1>
			</Brand>

			<Header />

			<Menu>
				<li>
					<ButtonText
						title="Todos"
						onClick={() => handleTagsSelected("all")}
						isActive={tagsSelected.length === 0}
					/>
				</li>
				{
					tags && tags.map(tag => (
						<li key={String(tag.id)}>
							<ButtonText
								title={tag.name}
								onClick={() => handleTagsSelected(tag.name)}
								isActive={tagsSelected.includes(tag.name)}
							/>
						</li>
					))}
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
