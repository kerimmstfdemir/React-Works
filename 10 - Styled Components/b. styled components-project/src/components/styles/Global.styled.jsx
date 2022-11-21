import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({theme}) => theme.colors.body};
    color: #00252E;;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
`