import { createGlobalStyle } from "styled-components";
//import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Major+Mono+Display|Montserrat&display=swap');

  * {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #353940;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
    line-height: 1.5rem;
  }

  a {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4 {
    
    font-family: "Major Mono Display", monospace;
  }

  

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1rem;
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209em;
  }

  h2 {
    font-size: 3.157em;
  }

  h3 {
    font-size: 2.369em;
  }

  h4 {
    font-size: 1.777em;
  }

  h5 {
    font-size: 1.333em;
  }

  small,
  .text_small {
    font-size: 0.75em;
  }

  ul {
    list-style: none;
    display: flex;
    li {
      margin-right: 1rem;
      text-transform: uppercase;
    }
  }

  
  textarea {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
    color: #f6f6f6;
    margin-top: 8px;
    transition: border 0.15 ease;
    font-size: 16px;

    &:focus {
      border-color: #7289da;
    }
  }

 

  input,
  button {
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
