import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: auto;
    padding: 0%;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100%;

  }

  body{
    background: #a9a9a9;
  }

  button{
    cursor: pointer;
  }

`;