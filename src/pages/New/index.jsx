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
						<a href="/">Voltar</a>
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
							<NoteItem value="VueJS"/>
							<NoteItem value="JavaScript"/>
							<NoteItem value="NodeJS"/>
							<NoteItem value="HTML"/>
							<NoteItem isNew placeholder="Adicionar nova tag" />
						</div>
					</Section>

					<Button title="Salvar"/>
				</Form>
			</main>
		</Container>
	)
}