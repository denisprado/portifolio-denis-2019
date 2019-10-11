import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import chroma from "chroma-js";
import { Container, ContainerWorks, Work } from "./styles";
import ProjectCreateModal from "../../components/ProjectCreateModal";
import ProjectsActions from "../../store/ducks/projects";

function Works() {
  const scale = chroma.scale([
    "rgba(147, 26, 222, 0.83)",
    "rgba(28, 206, 234, 0.82)"
  ]);
  const dispatch = useDispatch();

  function handleAddProject() {
    dispatch(ProjectsActions.openProjectModal());
  }

  const { projectModalOpen } = useSelector(state => state.projects);
  const works = useSelector(state => state.projects.data);

  return (
    <Container>
      <h4>TrABalHo</h4>
      <button onClick={handleAddProject}>+</button>
      <ContainerWorks>
        {works.map(work => (
          <Work
            key={work.id}
            color={scale((100 * work.id) / works.length / 100)}
          ></Work>
        ))}
      </ContainerWorks>
      {projectModalOpen && <ProjectCreateModal />}
    </Container>
  );
}

export default Works;
