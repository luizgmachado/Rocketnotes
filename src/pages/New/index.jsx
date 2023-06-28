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
	
	function handleAddLink() {
		setLinks(prevState => [...prevState, newLink]);
		setNewLink("");
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
						{links.map((link) => (
							<NoteItem
								key={link}
								value={link}
								onClick={() => setLinks(links.filter((item) => item !== link))}
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
							<NoteItem value="ReactJS" />
							<NoteItem value="JavaScript" />
							<NoteItem value="NodeJS" />
							<NoteItem isNew placeholder="Add Nova tag" />
						</div>
					</Section>

					<Button title="Salvar" />
				</Form>
			</main>
		</Container>
	)
}