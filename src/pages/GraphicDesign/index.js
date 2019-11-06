import React from "react";
import MainNavigation from "../MainNavigation";
import {
  Container,
  IdentidadeVisual,
  DesignEditorial,
  MediaSocial
} from "./styles";

function GraphicDesign() {
  return (
    <MainNavigation>
      <Container>
        <DesignEditorial>
          <p>Design Editorial</p>
        </DesignEditorial>
        <IdentidadeVisual>
          <p>Identidade Visual</p>
        </IdentidadeVisual>
        <MediaSocial>
          <p>Gráfica & Social Media</p>
        </MediaSocial>
      </Container>
    </MainNavigation>
  );
}

export default GraphicDesign;
