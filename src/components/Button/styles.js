import styled, { css } from "styled-components";

export const Container = styled.button`
        height: 2.5rem;
        width: 100%;
        min-width: 12rem;
        /* max-width: 17.7rem; */
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: ${({theme}) => theme.colors.white};
        background: ${({theme}) => theme.colors.grey};

        border-radius: 2.2rem;
        border: none;

        cursor: pointer;
        position: relative;

        ${({$variant:variant}) => variant && css`
            color: ${({theme}) => theme.colors.white};
            background: ${({theme}) => theme.colors.pink};
            min-width: 17.7rem;
            

            &::after{
                content: "";
                position: absolute;
                border: 3px solid #e4105d;
                top: -.7rem;
                left: -.6rem;
                width: calc(100% + 1rem);
                height: calc(100% + 1rem);
                border-radius: 22px;
            }
        `}

`