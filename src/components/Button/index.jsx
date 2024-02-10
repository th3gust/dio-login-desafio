import { Container } from "./styles";

const Button = ({title, variant= false}) =>{
    return (
        <Container $variant={variant}>
            {title}
        </Container>
    )
}

export default Button