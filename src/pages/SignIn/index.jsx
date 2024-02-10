import Header from "../../components/Header";
import {Container, Content, Text} from "./styles";
import Form from "../../components/Form";

const SingIn = () =>{
    return (
        <Container>
            <Header/>
            <Content>
                <Text>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Text>
                <Form
                    signin
                    title="Comece agora grátis"
                    subtitle="Faça seu login e make the change._"
                />
            </Content>
        </Container>
    )
}

export default SingIn