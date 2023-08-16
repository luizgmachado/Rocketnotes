import { Container } from "./styles";

export function Input({icon: Icon, ...rest}) {
  return (
		<Container>
			<label>
				{Icon && <Icon size={24} />}
				<input {...rest} />
			</label>
		</Container>
	)
}