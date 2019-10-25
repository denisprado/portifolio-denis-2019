import styled from "styled-components";

const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const vwInRem = parseFloat(window.innerWidth) / rem;

export const Container = styled.div`
  border-width: ${props => (props.borderWidth ? props.borderWidth : "1px")};
  border-color: ${props => (props.borderColor ? props.borderColor : "magenta")};
  border-style: ${props => (props.borderStyle ? props.borderStyle : "solid")};
  margin-left: ${props => props.left && `${props.left}rem`};
  margin-left: ${props => props.right && `${vwInRem - props.right}rem`};
  position: absolute;
  content: " ";
  height: 100vh;
`;
