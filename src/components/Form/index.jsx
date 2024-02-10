import { Container, GreenText, SignInText, SpecialText, WhiteText, Wrapper, YellowText } from "./styles"
import email from "../../assets/imgs/email.png"
import password from "../../assets/imgs/password.png"
import user from "../../assets/imgs/user.png"
import Input from "../Input"
import Button from "../Button"

const Form = ({title, subtitle, signin=false}) =>{
    return (
        <Container>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {
                signin? (
                    <Input icon={user} placeholder="Nome completo"/>
                        ):null
            }
            <Input icon={email} placeholder="E-mail"/>
            <Input icon={password} placeholder="Password"/>
            <Button title="Entrar" variant/>
                {
                    signin? (
                                <SignInText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SignInText>
                            ):null
                }
            <Wrapper>
                {
                    signin? ( 
                            <SpecialText>
                                <WhiteText>Já tenho conta.</WhiteText><GreenText> Fazer login.</GreenText>
                            </SpecialText>
                            ):
                            <>
                                <SpecialText>
                                    <YellowText>Esqueci minha senha</YellowText>
                                </SpecialText>
                                <SpecialText>
                                    <GreenText>Criar conta</GreenText>
                                </SpecialText>
                            </>
                }
                
            </Wrapper>
        </Container>
    )
}

export default Form