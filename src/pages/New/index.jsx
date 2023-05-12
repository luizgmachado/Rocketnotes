import { Container, Form } from "./styles";
import { Input } from "../../components/Input";

import { Header } from "../../components/Header";


export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <a href="/">Voltar</a>
          </header>

          <Input 
            type="text" 
            placeholder="Título" />

          <Input 
            type="textarea" 
            placeholder="Observação" />

        </Form>

      </main>


    </Container>
  )
}