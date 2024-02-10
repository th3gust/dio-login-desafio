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
`

export const Text = styled.section`
    width: 36.8rem;

    h1{
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.4rem;
        color:${({theme}) => theme.colors.white}
    }

    strong{
        color:${({theme}) => theme.colors.pink};
    }

    p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color:${({theme}) => theme.colors.white};
        margin-block: 1.3rem 5.3rem;
        width: 40rem;
    }
`

export const Banner = styled.img`
    width: 56.3rem;
    height: 36.6rem;
`

export const Wrapper = styled.article`
    width: 15.6rem;
`