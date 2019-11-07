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
    color: #353940;
    font-family: ff-meta-web-pro, sans-serif;
    font-weight: 500;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  
  p {
    font-size: .875rem;
    margin: .525rem 1rem 0 0;
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
    font-family: ff-meta-web-pro, sans-serif;;
    font-weight: 700;
    color: #353940;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209em;
  }

  h2 {
    font-size: 1.5rem;
    line-height:2rem;
    font-style:italic;
    padding-top:.5rem;
  }

  h3 {
    font-size: 2.369rem;
  }

  h4 {
    font-size: 1.777rem;
  }

  h5 {
    font-size: 1.333rem;
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
