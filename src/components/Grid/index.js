/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Baseline from "./Baseline";

import Guides from "./Guides";

// Hook
export function useWindowSize() {
  const isClient = typeof window === "object";
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

  function getSize() {
    return {
      width: isClient ? window.innerWidth / rem : undefined,
      height: isClient ? window.innerHeight / rem : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function Grid() {
  const [gridVisible, setGridVisible] = useState(true);

  useEffect(() => {
    const listener = e => {
      if (e.key === "g" && e.ctrlKey === true && e.altKey === true) {
        setGridVisible(!gridVisible);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [gridVisible]);

  const initialSetup = {
    breakpoints: [1920, 1200, 1024, 768, 568, 320],
    minCol: 10,
    margins: 3,
    visible: gridVisible,
    guides: {
      visible: true,
      columns: 6,
      gutter: 1
    },
    baseline: {
      visible: true
    }
  };

  return (
    initialSetup.visible && (
      <Container>
        {initialSetup.baseline.visible && <Baseline />}
        {initialSetup.guides.visible && (
          <Guides
            columns={initialSetup.guides.columns}
            breakpoints={initialSetup.breakpoints}
            gutter={initialSetup.guides.gutter}
            minCol={initialSetup.minCol}
            margins={initialSetup.margins}
          />
        )}
      </Container>
    )
  );
}

export default Grid;
