import React from "react";

import { Parallax } from "react-spring/renderprops-addons";
import Sobre from "../Sobre";
import Home from "../Home";
import Works from "../Works";

import Button from "../../styles/components/Buttons";
import { LayerContainer, Menu } from "./styles";

function MainNavigation() {
  let parallax = React.createRef();

  return (
    <>
      <Parallax ref={ref => (parallax = ref)} pages={4}>
        <LayerContainer
          factor={0.95}
          bgcolorgradient={[
            "-45deg",
            "rgba(147, 26, 222, 0.83)",
            "rgba(28, 206, 234, 0.82)"
          ]}
        ></LayerContainer>
        <LayerContainer factor={0.95} speed={2} offset={0}>
          <Home />
        </LayerContainer>

        <LayerContainer
          onClick={() => parallax.scrollTo(2)}
          offset={1}
          speed={1.5}
        >
          <Sobre />
        </LayerContainer>

        <LayerContainer offset={2} speed={1.5}>
          <Works />
        </LayerContainer>

        <LayerContainer offset={3} speed={1.8}>
          <h3>COnTato</h3>
        </LayerContainer>
      </Parallax>
      <Menu>
        <img
          src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/e00b62abdab10aa8ffbf183b47d04e52/4b439f8a-790c-4b66-88d0-222a168c7a15_rwc_0x0x300x300x4096.png?h=f2952c0b296756e5645e6e762866e4b1"
          alt="logo Denis Forigo"
          width="50px"
          height="50px"
          onClick={() => parallax.scrollTo(0)}
        ></img>
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
              contato
            </Button>
          </li>
          <li>
            <Button link to="/signin">
              Signin
            </Button>
          </li>
        </ul>
      </Menu>
    </>
  );
}

export default MainNavigation;
