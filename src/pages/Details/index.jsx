import { useState, useEffect } from "react"
import { Container, Links, Content } from "./styles"
import { useParams } from "react-router-dom"

import { api } from "../../services/api"

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
	const [data, setData] = useState(null)

	const params = useParams()

	useEffect(() => {
		async function fetchData() {
			const response = await api.get(`/notes/${params.id}`)
			setData(response.data)
		}
		fetchData()
	}, [])

	return (
		<Container>
			<Header />

			{data && (
				<main>
					<Content>
						<ButtonText title="Excluir Nota" />

						<h1 >{data.title}</h1>

						<p>{data.description}</p>

						{
						
						data.links && 
							<Section title="Links úteis">
								<Links>
									{
									data.links.map((link) => (
										<li 
											key={String(link.id)}>
											<a 
											target="_blank"
											href={link.url}>{link.url}
											
											</a>
										</li>
									))
									}
								</Links>
							</Section>
						}
						{
						data.tags && 
							<Section title="Marcadores">
								{
								data.tags.map((tag) => (
									<Tag 
										key={String(tag.id)}
										title={tag.name} />
								))
								}
							</Section>
						}
						<Button title="Voltar" />
					</Content>
				</main>
			)}
		</Container>
	)
}
