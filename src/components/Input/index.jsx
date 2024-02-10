import { Container, Icon, Wrapper } from "./styled";


const Input = ({icon, name, ...rest}) =>{
    return(
        <Container>
            <Icon
                src={icon}
            />
            <Wrapper {...rest}/>
        </Container>
    )
}

export default Input