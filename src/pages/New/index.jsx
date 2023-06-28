import { useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";
export function New() {
	const [links, setLinks] = useState([]);
	const [newLink, setNewLink] = useState("");

	const [tags, setTags] = useState([])
	const [newTags, setNewTags] = useState("")
	
	function handleAddLink() {
		setLinks(prevState => [...prevState, newLink]);
		setNewLink("");
	}

	function handleRemoveLink(index) {
		const newLinks = [...links];
		newLinks.splice(index, 1);
		setLinks(newLinks);
	}

	function handleAddTag() {
		setTags(prevState => [...prevState, newTags]);
		setNewTags("");
	}

  return (
		<Container>
			<Header />

			<main>
				<Form>
					<header>
						<h1>Criar nota</h1>
						<Link to="/">Voltar</Link>
					</header>

					<Input placeholder="Título" />
					<Textarea placeholder="Observação" />

					<Section title="Links úteis">
						{links.map((link, index) => (
							<NoteItem
								key={String(index)}
								value={link}
								onClick={() => handleRemoveLink(index)}
								//onClick={() => setLinks(links.filter((item) => item !== link))}
							/>
						))}

						<NoteItem
							isNew
							placeholder="Adicionar novo link"
							value={newLink}
							onChange={(e) => setNewLink(e.target.value)}
							onClick={handleAddLink}
						/>
					</Section>

					<Section title="Marcadores">
						<div className="tags">
							<NoteItem 
								value="ReactJS" 
								onClick={handleAddTag}
							/>
						
						</div>
					</Section>

					<Button title="Salvar" />
				</Form>
			</main>
		</Container>
	)
}