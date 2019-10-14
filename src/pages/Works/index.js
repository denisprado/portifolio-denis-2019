import chroma from "chroma-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCreateModal from "../../components/ProjectCreateModal";
import ProjectsActions from "../../store/ducks/projects";
import { Container, ContainerWorks, Work } from "./styles";

function Works() {
  const scale = chroma.scale([
    "rgba(147, 26, 222, 0.83)",
    "rgba(28, 206, 234, 0.82)"
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProjectsActions.getProjectsRequest());
  }, [dispatch]);

  function handleAddProject() {
    dispatch(ProjectsActions.openProjectModal());
  }

  const { projectModalOpen } = useSelector(state => state.projects);
  const works = useSelector(state => state.projects);

  return (
    <Container>
      <h4>TrABalHo</h4>
      <button onClick={handleAddProject}>Add</button>
      <ContainerWorks>
        {works.data.map(work => {
          console.log(works.data);
          const thumb = work.files.find(file => file.id === work.file_id);
          return (
            <Work
              key={work.id}
              color={scale((100 * work.id) / works.data.length / 100)}
              image={thumb && thumb.url}
            />
          );
        })}
      </ContainerWorks>
      {projectModalOpen && <ProjectCreateModal />}
    </Container>
  );
}

export default Works;
