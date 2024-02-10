import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 4.7rem;
    background-color: ${({theme}) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .8rem 6rem 1.4rem;
    color: ${({theme}) => theme.colors.white};

    .link{
        font-size: 1.8rem;
        color: white;
        text-decoration: none;
    }
`

export const Logo = styled.img`

`

export const Side = styled.section`
    display: flex;
    align-items: center;
    gap: 1.7rem;
    
    p{
        
        color: white;
    }
`

export const Input = styled.div`
    margin-left: calc(3.5rem - 1.7rem);
    background-color: ${({theme})=> theme.colors.background_input};
    display: flex;
    gap: 1.1rem;
    align-items: center;
    padding-block: .9rem .9rem; 
    border: none;
    border-radius: 2.2rem;
    height: 3rem;
`

export const Icon = styled.img`
    margin-left: .9rem;
`

export const Wrapper = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: ${({theme}) => theme.colors.white};
`

export const Profile = styled.div`
    display: flex;
    gap: 1.1rem;
    align-items: center;

    .arrow{
        width: 1.2rem;
        height: 1.2rem;
    }
`