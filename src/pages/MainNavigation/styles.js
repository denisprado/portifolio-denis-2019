import styled from "styled-components";
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
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f0f0ee;
`;

export const HeaderContainer = styled.div`
  margin: 0rem 0 1rem 0;
  z-index: 999;

  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem ${props => props.margin + 1}rem 0rem
    ${props => props.margin - 1}rem;
`;

export const Logo = styled(Link)`
  font-size: 1.375rem;
  font-style: italic;
  padding: 0.825rem 0 0.7rem 0;
  font-family: ff-meta-serif-web-pro, serif;
  font-weight: 700;
`;
export const Menu = styled.div`
  display: flex;
  justify-items: flex-end;
  align-items: flex-start;

  li {
    margin: 1rem 0 0 1.5rem;
  }
`;

export const Content = styled.div`
  margin: 0rem ${props => props.margin + 1}rem 0rem
    ${props => props.margin - 1}rem;
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: rgb(221, 221, 217);
`;

export const Footer = styled.div`
  margin: 1.15rem ${props => props.margin + 1}rem 6rem
    ${props => props.margin - 1}rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  li {
    margin: 0 0 0 1.5rem;
  }
`;
