import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";

export const LayerContainer = styled(ParallaxLayer)`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  background: ${props =>
    props.bgcolorgradient
      ? `linear-gradient(${[
          props.bgcolorgradient[0],
          props.bgcolorgradient[1],
          props.bgcolorgradient[2]
        ]})`
      : null};
`;

export const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-items: center;
  align-items: center;
  img {
    margin: 2rem 0 0 5rem;
    width: 5rem;
    height: 5rem;
  }
  ul {
    margin: 2rem;
  }
  li {
    margin: 1rem 0rem 1rem 0rem;
  }
`;

export const Footer = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 20px;
  right:20px;
  display: flex;
  flex-direction: row;

  ul {
    li {
      margin: 1rem 0rem 1rem 1rem;
      }
    }
  }
`;
