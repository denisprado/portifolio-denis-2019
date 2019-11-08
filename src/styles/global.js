import { createGlobalStyle } from "styled-components";
//import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/xoi7mxq.css');

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
    background: #fff;
    color: #000;
    font-family: ff-meta-web-pro, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  ::selection {
    background: #f31451; /* WebKit/Blink Browsers */
    color: #fff;
  }
  
  p {
    font-size: .875rem;
    margin: .2rem 0 0 0;
    line-height: 1.25;
  }

  a {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ff-meta-web-pro, sans-serif;;
    font-weight: 100;
    color: #000;
  }


  h1 {
    font-size: 1.5rem;
    font-style: italic;
    padding: .7rem 0 0.7rem 0;
    font-family: ff-meta-serif-web-pro,serif;
  }

  h2{
    font-size: 1.2rem;
    padding: .899rem 0 0.7rem 0;
    font-family: ff-meta-serif-web-pro,serif;
  }

  h3{
    font-size: 1rem;
    padding: .9rem 0 0.7rem 0;
  }


  small,
  .text_small {
    font-size: 0.75em;
  }

  ul {
    list-style: none;
    display: flex;
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
    font-family: ff-meta-web-pro, sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
