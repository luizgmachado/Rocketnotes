import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/luizgmachado.png" alt="Foto do Usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>Luiz Machado</strong>
        </div>
      </Profile>
    </Container>
  );
}