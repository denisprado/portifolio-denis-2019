import React from "react";

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Sobre from "../Sobre";
import Home from "../Home";
import Works from "../Works";

import { LayerContainer } from "./styles";

function MainNavigation() {
  let parallax = React.createRef();

  return (
    <Parallax ref={ref => (parallax = ref)} pages={4}>
      <LayerContainer offset={0} factor={1}>
        <Home />
        <ul>
          <li>
            <a onClick={() => parallax.scrollTo(1)}>Sobre</a>
          </li>
          <li>
            <a onClick={() => parallax.scrollTo(2)}>Trabalho</a>
          </li>
          <li>
            <a onClick={() => parallax.scrollTo(3)}>contato</a>
          </li>
        </ul>
      </LayerContainer>
      <ParallaxLayer onClick={() => parallax.scrollTo(2)} offset={1}>
        <Sobre />
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <Works />
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <h3>Contato</h3>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MainNavigation;
