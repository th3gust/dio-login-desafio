import styled, { css } from "styled-components";
import SingIn from "../../pages/SignIn";

export const Container = styled.form`

color: ${({theme}) => theme.colors.white};
    width: 37rem;

    h1{
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 4.4rem;
        margin-bottom: .8rem;
    }

    p{

        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.5rem;
        margin-bottom: 3.5rem;
    }

`

export const Wrapper = styled.article`
    display: flex;
    margin-top: 4.4rem;
    gap: 5.7rem;
`

export const YellowText = styled.strong`
    color: ${({theme}) => theme.colors.yellow};
`

export const GreenText = styled.strong`
    color: ${({theme}) => theme.colors.green};
`

export const WhiteText = styled.strong`
    color: ${({theme}) => theme.colors.white};
`
export const SpecialText = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.9rem;

`

export const SignInText = styled.p`
    margin-top: 3.2rem;
`