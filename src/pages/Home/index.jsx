import Button from "../../components/Button";
import Header from "../../components/Header";
import banner from "../../assets/imgs/banner.png";
import { Banner, Container, Content, Text, Wrapper } from "./styles";
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <Container>
            <Header/>
            <Content>
                <Text>
                    <h1><strong>Implemente</strong> <br/>o seu futuro global agora!</h1>
                    <p>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
                    <Wrapper>
                        <Link to="/signin"><Button title="Começar agora" variant/></Link>
                    </Wrapper>
                </Text>
                <Banner
                    src={banner}
                />
            </Content>
        </Container>
    )
}

export default Home