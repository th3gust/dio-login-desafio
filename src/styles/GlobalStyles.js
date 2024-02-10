import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *,body, button, input{
        font-family: "Open Sans";
    }

    :root{
        font-size: 67.5%;
    }

    body{
        font-size: 1.6rem;
    }
`