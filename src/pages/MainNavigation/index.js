import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../../styles/components/Buttons";
import {
  Header,
  Menu,
  Link,
  Logo,
  Content,
  Footer,
  Container,
  ContentLayer,
  HeaderContainer
} from "./styles";
import AuthActions from "../../store/ducks/auth";
import { useDispatch } from "react-redux";
import store from "../../store";

function MainNavigation(props) {
  let loggedin = store.getState().auth.signedIn;
  const margins = useSelector(state => state.grid.margins);
  console.log(margins);
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(AuthActions.signOut());
  }

  return (
    <Container margin={margins}>
      <HeaderContainer>
        <Header>
          <Logo>
            <h1>
              <Link to="/">Denis Forigo</Link>
            </h1>
          </Logo>
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
      {props.children}
      <Footer>
        <ul>
          <li>
            {!loggedin ? (
              <Button link>
                <Link to="/signin">Admin</Link>
              </Button>
            ) : (
              <Button link>
                <Link onClick={handleSignOut}>Signout</Link>
              </Button>
            )}
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default MainNavigation;
