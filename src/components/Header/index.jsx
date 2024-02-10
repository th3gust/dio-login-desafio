import { Container, Icon, Input, Logo, Profile, Side, Wrapper } from "./styles"
import logo from "../../assets/imgs/logo.png"
import profile from "../../assets/imgs/profile.png"
import downArrow from "../../assets/imgs/down-arrow.png"
import search from "../../assets/imgs/search.png"
import Button from "../Button"
import { Link } from "react-router-dom"

const Header = ({logged=false}) =>{
    return(
        <Container>
            <Side>
                <Link to='/'>
                    <Logo
                        src={logo}
                    />
                </Link>
                <Input>
                    <Icon
                        src={search}
                    />
                    <Wrapper
                    />
                </Input>
                <Link to="/"  className="link"><strong>Live Code</strong></Link>
                <Link to="/"  className="link"><strong>Global</strong></Link>
            </Side>
            <Profile>
                <Logo
                    src={profile}
                />
                <Logo className="arrow"
                    src={downArrow}
                />
            </Profile>
            
            {
                logged? (
                        <>
                        </>
                ):(
                <Side>
                    <Link to="/"  className="link">Home</Link>
                    <Link to="/signup"><Button title="Entrar"/></Link>
                    <Link to="/signin"><Button title="Cadastrar"/></Link>
                </Side>
                )
            }
            
        </Container>
    )
}

export default Header