import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";

export const Container = styled.div`
  width: 80rem;
  margin: 0rem auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  margin: 4rem 0 2rem 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80rem;
`;

export const Logo = styled.div``;
export const Menu = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: flex-end;

  li {
    margin: 0rem 0 0 2.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 6rem;
  &:first-child {
    margin-top: 2rem;
  }
  width: 80rem;
`;

export const ContentLayer = styled.div`
  display: flex;
  width: 80rem;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LayerContainer = styled(ParallaxLayer)`
  z-index: 0;
  background-color: #ccc;
  background: ${props =>
    props.bgcolorgradient
      ? `linear-gradient(${[
          props.bgcolorgradient[0],
          props.bgcolorgradient[1],
          props.bgcolorgradient[2]
        ]})`
      : null};
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
