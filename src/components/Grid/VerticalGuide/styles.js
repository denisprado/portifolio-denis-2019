import styled from "styled-components";

export const Container = styled.div`
  border-width: ${props => (props.borderWidth ? props.borderWidth : "1px")};
  border-color: ${props => (props.borderColor ? props.borderColor : "magenta")};
  border-style: ${props => (props.borderStyle ? props.borderStyle : "solid")};
  margin-left: ${props => props.left && `${props.left - 1}rem`};
  margin-left: ${props =>
    props.right && `${props.totalWidth - 1 - props.right}rem`};
  box-sizing: content-box;
  position: absolute;
  content: " ";
  height: ${props => props.totalHeight}rem;
`;
