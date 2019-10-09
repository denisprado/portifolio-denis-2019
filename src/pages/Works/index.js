import React, { useState } from "react";
import chroma from "chroma-js";
import { Container, Work } from "./styles";

function Works() {
  const scale = chroma.scale(["purple", "lightblue"]).mode("lab");
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 2,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 3,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 4,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 5,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 6,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 7,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 8,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    }
  ]);

  return (
    <Container>
      {works.map(work => (
        <Work key={work.id} color={scale(work.id / 10)}>
          <p>work.title</p>
        </Work>
      ))}
    </Container>
  );
}

export default Works;
