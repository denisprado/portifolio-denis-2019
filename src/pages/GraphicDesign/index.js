import React from "react";
import MainNavigation from "../MainNavigation";
import idVisual from "../../assets/images/identidadeVisual.svg";
import socialMedia from "../../assets/images/socialMediaPrint.svg";
import designEdit from "../../assets/images/designEditorial.svg";
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
          <img src={designEdit} alt="Design Editorial"></img>
          <h2>Design Editorial</h2>
        </DesignEditorial>
        <IdentidadeVisual>
          <img src={idVisual} alt="Identidade Visual"></img>
          <h2>Identidade Visual</h2>
        </IdentidadeVisual>
        <MediaSocial>
          <img src={socialMedia} alt="Gráfica & Social Media"></img>
          <h2>Gráfica & Social Media</h2>
        </MediaSocial>
      </Container>
    </MainNavigation>
  );
}

export default GraphicDesign;
