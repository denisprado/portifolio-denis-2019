/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Baseline from "./Baseline";

import Guides from "./Guides";

// Hook
export function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
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
  const initialSetup = {
    margins: {
      right: 6,
      left: 6
    },
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
    <Container>
      {initialSetup.guides.visible && (
        <Guides
          columns={initialSetup.guides.columns}
          margins={initialSetup.margins}
          gutter={initialSetup.guides.gutter}
        />
      )}
      {initialSetup.baseline.visible && <Baseline />}
    </Container>
  );
}

export default Grid;
