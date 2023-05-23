import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";
export function New() {
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
						<NoteItem value="https://www.google.com"/>
						<NoteItem isNew placeholder="Adicionar novo link" />
					</Section>

				<Section title="Marcadores">
						<div className="tags">
							<NoteItem value="ReactJS"/>
							<NoteItem value="JavaScript"/>
							<NoteItem value="NodeJS"/>
							<NoteItem isNew placeholder="Add Nova tag" />
						</div>
					</Section>

					<Button title="Salvar"/>
				</Form>
			</main>
		</Container>
	)
}