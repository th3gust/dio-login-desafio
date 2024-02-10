import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.colors.grey_line};
    display: flex;
    align-items: center;
    gap: .6rem;
    margin-bottom: 2rem;

`

export const Icon = styled.img`

`

export const Wrapper = styled.input`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.5;
    background-color: transparent;
    border:none;
    color: ${({theme}) => theme.colors.white};
    outline: none;
`