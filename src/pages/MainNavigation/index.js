import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../../styles/components/Buttons";
import {
  Header,
  Menu,
  Link,
  Logo,
  Footer,
  Container,
  Content,
  HeaderContainer,
  FooterContainer
} from "./styles";
import AuthActions from "../../store/ducks/auth";
import { useDispatch } from "react-redux";
import store from "../../store";

function MainNavigation(props) {
  let loggedin = store.getState().auth.signedIn;
  const margins = useSelector(state => state.grid.margins);

  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(AuthActions.signOut());
  }

  return (
    <Container>
      <HeaderContainer>
        <Header margin={margins}>
          <Logo to="/">Denis Forigo</Logo>
          <Menu>
            <ul>
              <li>
                <Button link>
                  <Link to="/about">Sobre</Link>
                </Button>
              </li>
              <li>
                <Button link>
                  <Link to="/work">Trabalho</Link>
                </Button>
              </li>
              <li>
                <Button link>
                  <Link to="/graphic-design">Design Gráfico</Link>
                </Button>
              </li>
              <li>
                <Button link>
                  <Link to="/web-dev">Desenvolvimento Web</Link>
                </Button>
              </li>
            </ul>
          </Menu>
        </Header>
      </HeaderContainer>
      <Content margin={margins}>{props.children}</Content>
      <FooterContainer>
        <Footer margin={margins}>
          <p>Campinas/SP</p>
          <ul>
            <li>
              <Button link>
                <Link to="/contact">Contato</Link>
              </Button>
            </li>
            <li>
              {!loggedin ? (
                <Button link>
                  <Link to="/signin">login</Link>
                </Button>
              ) : (
                <Button link>
                  <Link onClick={handleSignOut}>Signout</Link>
                </Button>
              )}
            </li>
          </ul>
        </Footer>
      </FooterContainer>
    </Container>
  );
}

export default MainNavigation;
