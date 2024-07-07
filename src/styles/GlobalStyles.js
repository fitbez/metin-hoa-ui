import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export default GlobalStyles;
