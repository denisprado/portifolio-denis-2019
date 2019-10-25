import React from "react";

import { Container } from "./styles";
import VerticalGuide from "../VerticalGuide";

function Margins() {
  return (
    <Container>
      <VerticalGuide left={6}></VerticalGuide>
      <VerticalGuide right={9}></VerticalGuide>
    </Container>
  );
}

export default Margins;
