import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
`;
