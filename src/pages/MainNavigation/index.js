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

function MainNavigation() {
  let parallax = React.createRef();
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
                <Button link onClick={() => parallax.scrollTo(0)}>
                  <h2>DENIS FORIGO</h2>
                </Button>
              </li>
            </ul>
          </Logo>
          <Menu>
            <ul>
              <li>
                <Button link onClick={() => parallax.scrollTo(1)}>
                  Sobre
                </Button>
              </li>
              <li>
                <Button link onClick={() => parallax.scrollTo(2)}>
                  Trabalho
                </Button>
              </li>
              <li>
                <Button link onClick={() => parallax.scrollTo(3)}>
                  Design Gráfico
                </Button>
              </li>
              <li>
                <Button link onClick={() => parallax.scrollTo(3)}>
                  Desenvolvimento Web
                </Button>
              </li>
            </ul>
          </Menu>
        </Header>
      </HeaderContainer>
      <Content>
        <ContentLayer>
          <Home />
        </ContentLayer>
        <ContentLayer>
          <Sobre />
        </ContentLayer>
        <ContentLayer>
          <Works />
        </ContentLayer>
        <ContentLayer>
          <GraphicDesign />
        </ContentLayer>
      </Content>

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
