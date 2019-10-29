import styled from "styled-components";

export const Container = styled.div`
  border-width: ${props =>
    props.borderWidth ? props.borderWidth : "0.032rem"};
  border-color: ${props => (props.borderColor ? props.borderColor : "#000000")};
  border-style: ${props => (props.borderStyle ? props.borderStyle : "solid")};
  margin-top: ${props => (props.height ? `${props.height}rem` : "1rem")};
  position: relative;
  content: " ";
  width: 98vw;
`;
