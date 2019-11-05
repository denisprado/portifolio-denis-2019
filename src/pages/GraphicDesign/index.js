import React from "react";

import {
  Container,
  IdentidadeVisual,
  DesignEditorial,
  MediaSocial
} from "./styles";

function GraphicDesign() {
  return (
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
  );
}

export default GraphicDesign;
