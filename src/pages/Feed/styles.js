import styled from "styled-components";

export const Container = styled.div`
    
`
export const Content = styled.main`
    height: calc(100vh - 4.7rem);
    background-color: ${({theme}) => theme.colors.purple};

    display: flex;
    gap: 22.4rem;

    justify-content: center;
    align-items: center;

    overflow: hidden;
`

export const FeedList = styled.section`
    padding-top: 12rem;
    display: flex;
    flex-direction: column;
    gap: 2.1rem;

    h1{
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 2.5rem;
        color: ${({theme}) => theme.colors.white};
    }
`

export const Card = styled.img`

`

export const Ranking = styled.section`
    h1{
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 2.5rem;
        color: ${({theme}) => theme.colors.grey_line};
    }

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const RankPosition = styled.div`

    display: flex;
    gap:1.5rem;

    h1{
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
            color: ${({theme}) => theme.colors.white};
    }

    div{
        display: flex;
        flex-direction: column;
        gap: .2rem;
    }
`

export const ProgressBar= styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 13.7rem;
    height: .9rem;
    border-radius: .6rem;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        background-color: ${({theme}) => theme.colors.green};
        width: ${({progress}) => progress}%;
        height: 100%;
        border-radius: .6rem;
    }
`