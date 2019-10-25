import React from "react";
import { Container } from "./styles";
import Baseline from "./Baseline";
import Margins from "./Margins";

function Grid() {
  return (
    <Container>
      <Margins />
      <Baseline />
    </Container>
  );
}

export default Grid;
