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
    font-family: "Open Sans";
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.4rem;
    color: ${({theme}) => theme.colors.white};
    width: 56.5rem;
    height: 17.6rem;
`