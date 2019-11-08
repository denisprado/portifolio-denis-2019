import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { Link as ReactLink } from "react-router-dom";

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #000;
  transition: color 10s ease;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Container = styled.div`
  margin: 0rem ${props => props.margin + 1}rem 0rem
    ${props => props.margin - 1}rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  margin: 1rem 0 1rem 0;
  z-index: 999;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div``;
export const Menu = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: flex-start;

  li {
    margin: 1rem 0 0 1.5rem;
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

export const FooterContainer = styled.div`
  margin: 4rem 0 1rem 0;
  z-index: 999;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position:absolute;
  ul {
    li {
      margin: 40rem 0rem 1rem 1rem;
      }
    }
  }
`;
