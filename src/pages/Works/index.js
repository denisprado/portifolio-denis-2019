import React, { useState } from "react";
import chroma from "chroma-js";
import { Container, ContainerWorks, Work } from "./styles";

function Works() {
  const scale = chroma.scale([
    "rgba(147, 26, 222, 0.83)",
    "rgba(28, 206, 234, 0.82)"
  ]);
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
      id: 9,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 10,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 11,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    },
    {
      id: 12,
      title: "Trabalho 1",
      description: "Um bom texto de descrição",
      image: ""
    }
  ]);

  return (
    <Container>
      <h4>TrABalHo</h4>
      <ContainerWorks>
        {works.map(work => (
          <Work
            key={work.id}
            color={scale((100 * work.id) / works.length / 100)}
          ></Work>
        ))}
      </ContainerWorks>
    </Container>
  );
}

export default Works;
