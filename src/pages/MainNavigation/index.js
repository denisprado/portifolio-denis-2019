import React from "react";

import Sobre from "../Sobre";
import Home from "../Home";
import Works from "../Works";
import GraphicDesign from "../GraphicDesign";
import { Link } from "react-router-dom";
import Button from "../../styles/components/Buttons";
import {
  Header,
  Menu,
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
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(AuthActions.signOut());
  }

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Logo>
            <ul>
              <li>
                <Button link>
                  <h2>
                    <Link to="/">DENIS FORIGO</Link>
                  </h2>
                </Button>
              </li>
            </ul>
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
                <Link to="/signin">Signin</Link>
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
