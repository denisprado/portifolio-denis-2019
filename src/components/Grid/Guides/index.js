/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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

function Guides({ margins, columns, gutter }) {
  const size = useWindowSize();
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const vwInRem = parseFloat(size.width) / rem;

  const countGuides = columns * 2;
  const sizeMarginsRem = margins.left + margins.right;
  const gutterTotalSize = (columns - 1) * gutter;
  const c = (vwInRem - sizeMarginsRem - gutterTotalSize) / columns;
  const m = margins.left;
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
      {guides.map(guide => {
        return <VerticalGuide key={guide} left={guide}></VerticalGuide>;
      })}
    </>
  );
}

export default Guides;
