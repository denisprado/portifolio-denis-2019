import { createGlobalStyle } from "styled-components";
//import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/xoi7mxq.css');

  * {
    font-size:16px;
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
    background: #fff;
    color: #353940;
    font-family: input-mono, sans-serif;
    font-weight: 100;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  p {
    font-size: (1/1.2)rem;
    margin-bottom: 1.25rem;
    line-height: 1rem;
  }

  a {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: input-mono, monospace;
    font-weight: 100;
    color: #353940;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209em;
  }

  h2 {
    font-size: 2em;
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
    font-family: input-mono, sans-serif;
    font-weight:100;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
