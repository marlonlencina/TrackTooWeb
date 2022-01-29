import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background-color: ${props => props.theme.colors.white};
}

*, button, input {
    font-family: "Poppins", sans-serif;
    font-weight: ${props => props.theme.fonts.medium};
}

`