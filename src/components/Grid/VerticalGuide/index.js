import React from "react";

import { Container } from "./styles";

import { useWindowSize } from "../index";

function VerticalGuide(props) {
  const size = useWindowSize();
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const vwInRem = parseFloat(size.width) / rem;
  return (
    <Container {...props} totalWidth={vwInRem} totalHeight={size.height} />
  );
}

export default VerticalGuide;
