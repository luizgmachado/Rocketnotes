import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form } from "./styles";

import { api } from "../../services/api";
import { toast } from "react-toastify";
export function New() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [links, setLinks] = useState([]);
	const [newLink, setNewLink] = useState("");

	const [tags, setTags] = useState([])
	const [newTags, setNewTags] = useState("")

	const navigate = useNavigate();
	
	function handleBack() {
		navigate(-1)
	}

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

	function handleRemoveTag(deleted) {
		setTags((prevState) => prevState.filter((tag) => tag !== deleted))
	}

	

	async function handleNewNote() {
		if (!title || !tags || !links) {
			return toast.error("Preencha o todos os campos!")
		}

		if (newLink){
			return toast.warn("Exite um campo de link preenchido sem adicionar, deseja adicionar mais um link?")
		}
		
		if (newTags){
			return toast.warn("Exite um campo de Tag preenchido sem adicionar, deseja adicionar mais um tag?")
		}
		await api.post("/notes", {
			title,
			description,
			tags,
			links
		})

		toast.success("Nota criada com sucesso!")
		navigate(-1)
	}
  return (
		<Container>
			<Header />

			<main>
				<Form>
					<header>
						<h1>Criar nota</h1>
						<ButtonText title="Voltar" onClick={handleBack} />
					</header>

					<Input
						placeholder="Título"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Textarea
						placeholder="Observação"
						onChange={(e) => setDescription(e.target.value)}
					/>

					<Section title="Links úteis">
						{links.map((link, index) => (
							<NoteItem
								key={String(index)}
								value={link}
								onClick={() => handleRemoveLink(index)}
								// Abaixo é o mesmo código de remover o link direto no componente e de uma forma diferente
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
							{tags.map((tag, index) => (
								<NoteItem
									key={String(index)}
									value={tag}
									onClick={() => handleRemoveTag(tag)}
								/>
							))}
							<NoteItem
								isNew
								placeholder="Adicionar nova tag"
								value={newTags}
								onChange={(e) => setNewTags(e.target.value)}
								onClick={handleAddTag}
							/>
						</div>
					</Section>

					<Button title="Salvar" onClick={handleNewNote} />
				</Form>
			</main>
		</Container>
	)
}