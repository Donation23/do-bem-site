import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    /* user-select: none; */
    scroll-behavior: smooth;
    box-sizing: border-box;

    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  html, body, #__next {
    height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  /* body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  } */

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  } */
`;

export default GlobalStyles;
