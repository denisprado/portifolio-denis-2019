import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";

export const LayerContainer = styled(ParallaxLayer)`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background: ${props =>
    props.bgColorGradient
      ? `linear-gradient(${[
          props.bgColorGradient[0],
          props.bgColorGradient[1],
          props.bgColorGradient[2]
        ]})`
      : null};
`;

export const Menu = styled.div`
  padding: 1rem;
  position: fixed;
  display: flex;
  ul {
    li {
      margin: 1rem 0rem 1rem 1rem;
    }
  }
`;
