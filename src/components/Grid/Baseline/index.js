import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import Line from "../Line";

function Baseline() {
  const [lines, setLines] = useState(1);
  const arrayLines = [];

  for (let index = 0; index <= lines; index++) {
    arrayLines[index] = <Line />;
  }

  useEffect(() => {
    setLines(
      window.innerHeight /
        parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }, []);

  return <Container>{arrayLines.map(line => line)}</Container>;
}

export default Baseline;
