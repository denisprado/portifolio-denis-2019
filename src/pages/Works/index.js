import chroma from "chroma-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectsActions from "../../store/ducks/projects";
import ProjectCreateModal from "../../components/ProjectCreateModal";
import UploadFiles from "../../components/UploadFiles";
import FilesActions from "../../store/ducks/files";
import { Container, ContainerWorks, Work } from "./styles";
import Button from "../../styles/components/Buttons";
import Can from "../../components/Can";
import store from "../../store";

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

  function handleUploadFiles(project) {
    dispatch(ProjectsActions.selectProject(project));
    dispatch(FilesActions.openModalUpload());
  }

  const works = useSelector(state => state.projects);
  const { projectModalOpen } = useSelector(state => state.projects);
  const { modalUploadOpen } = useSelector(state => state.files);
  let loggedin = store.getState().auth.signedIn;
  return (
    <Container>
      <h4>TrABalHo</h4>
      {loggedin && <Button onClick={handleAddProject}>Add</Button>}
      <ContainerWorks>
        {works.data.map(work => {
          const thumb =
            work.files && work.files.find(file => file.id === work.file_id);
          return (
            <Work
              key={work.id}
              color={scale((100 * work.id) / works.data.length / 100)}
              image={thumb && thumb.url}
            >
              {loggedin && (
                <Button onClick={() => handleUploadFiles(work)}>Up</Button>
              )}
            </Work>
          );
        })}
      </ContainerWorks>
      {projectModalOpen && <ProjectCreateModal />}
      {modalUploadOpen && <UploadFiles />}
    </Container>
  );
}

export default Works;
