/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import VerticalGuide from "../VerticalGuide";
import { useWindowSize } from "../index";
//import { Container } from './styles';

function isPair(num) {
  switch (num % 2) {
    case 0:
      return true;
    case 1:
      return false;
    default:
      return true;
  }
}

function Column(windowWidth, m, gutter, columns, min) {
  let i = columns;
  let gutterTotal = (columns - 1) * gutter;
  let size = (windowWidth - m * 2 - gutterTotal) / columns;

  // enquanto o tamanho da coluna for menor que o mínimo, retire colunas
  if (size < min) {
    for (i = columns; size < min; i--) {
      size = (windowWidth - m * 2 - gutterTotal) / i;
      gutterTotal = (i - 1) * gutter;
    }
  }
  return { size, columns: i };
}

function Guides({ breakpoints, margins, columns, gutter, minCol }) {
  // get the window size
  const windowSize = useWindowSize();
  const width = windowSize.width;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

  // set the margins according breakpoints
  const breakpointActive = breakpoints.find(bp => bp / rem <= width) / rem;
  const mInit = (width - breakpointActive) / 2;

  const col = Column(width, mInit, gutter, columns, minCol);
  const c = col.size;

  const countGuides = col.columns * 2;
  const m = (width - (col.columns * c + (col.columns - 1) * gutter)) / 2;
  // set gutter
  const g = gutter;

  const guides = [];

  for (let i = 0; i < countGuides; i++) {
    if (isPair(i)) {
      if (i === 0) {
        guides[i] = m;
      } else {
        guides[i] = m + (i / 2) * c + (i / 2) * g;
      }
    } else {
      guides[i] = m + ((i - 1) / 2) * g + c * ((i + 1) / 2);
    }
  }

  return (
    <>
      <div
        style={{
          display: "absolute",
          float: "right",
          right: "10px",
          top: "10px",
          background: "#999"
        }}
      >
        <p>Breakpoint: {breakpointActive * rem}px</p>
        <p>Total Width: {width * rem}px</p>
        <p>Margin: {m * rem}px</p>
        <p>Col size: {c.toFixed(2) * rem}px</p>
        <p>Col min: {minCol * rem}px</p>
        <p>Columns: {col.columns}</p>
      </div>
      {guides.map((guide, index) => {
        return index === 0 || index === guides.length - 1 ? (
          <VerticalGuide key={guide} left={guide}></VerticalGuide>
        ) : (
          <VerticalGuide
            key={guide}
            borderColor={"cyan"}
            left={guide}
          ></VerticalGuide>
        );
      })}
    </>
  );
}

export default Guides;
