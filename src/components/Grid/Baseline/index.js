/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import Line from "../Line";
import VerticalGuide from "../VerticalGuide";

function Baseline() {
  const [lines, setLines] = useState(1);
  const [verticalGuides, setVerticalGuides] = useState(1);
  const arrayLines = [];
  const arrayVerticalGuides = [];
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

  for (let index = 0; index <= lines; index++) {
    arrayLines[index] = <Line key={index} />;
  }

  for (let index = 0; index <= verticalGuides; index++) {
    arrayVerticalGuides[index] = (
      <VerticalGuide borderColor="#aaa" left={index} key={index} />
    );
  }

  useEffect(() => {
    setLines(window.innerHeight / rem);
    setVerticalGuides(window.innerWidth / rem);
  }, []);

  return (
    <>
      <Container>{arrayLines.map(line => line)}</Container>
      <Container>{arrayVerticalGuides.map(guide => guide)}</Container>
    </>
  );
}

export default Baseline;
