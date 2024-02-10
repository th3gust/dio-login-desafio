import Header from "../../components/Header"
import { Card, Container, Content, FeedList, ProgressBar, RankPosition, Ranking } from "./styles"
import card from "../../assets/imgs/card.png"
import profile from "../../assets/imgs/profile.png"
import { Logo } from "../../components/Header/styles"

const Feed = () =>{
    return(
        <Container>
            <Header logged/>
            <Content>
                <FeedList>
                    <h1>Feed</h1>
                    <Card
                        src={card}
                    />
                    <Card
                        src={card}
                    />
                </FeedList>
                <Ranking>
                    <h1>#RANKING TOP 5 DA SEMANA</h1>
                    <RankPosition>
                        <Logo
                            src={profile}
                        />
                        <div>
                            <h1>Pablo Henrique</h1>
                            <ProgressBar progress={80}/>
                        </div>
                    </RankPosition>
                    <RankPosition>
                        <Logo
                            src={profile}
                        />
                        <div>
                            <h1>Pablo Henrique</h1>
                            <ProgressBar progress={80}/>
                        </div>
                    </RankPosition>
                    <RankPosition>
                        <Logo
                            src={profile}
                        />
                        <div>
                            <h1>Pablo Henrique</h1>
                            <ProgressBar progress={80}/>
                        </div>
                    </RankPosition>
                    <RankPosition>
                        <Logo
                            src={profile}
                        />
                        <div>
                            <h1>Pablo Henrique</h1>
                            <ProgressBar progress={80}/>
                        </div>
                    </RankPosition>
                    <RankPosition>
                        <Logo
                            src={profile}
                        />
                        <div>
                            <h1>Pablo Henrique</h1>
                            <ProgressBar progress={80}/>
                        </div>
                    </RankPosition>
                </Ranking>
            </Content>
        </Container>
    )
}

export default Feed