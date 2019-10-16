import chroma from "chroma-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCreateModal from "../../components/ProjectCreateModal";
import CategoryCreateModal from "../../components/CategoryCreateModal";
import UploadFiles from "../../components/UploadFiles";
import store from "../../store";
import FilesActions from "../../store/ducks/files";
import CategoriesActions from "../../store/ducks/categories";
import ProjectsActions from "../../store/ducks/projects";
import Button from "../../styles/components/Buttons";
import { Container, ContainerWorks, Work, Dashboard } from "./styles";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  function handleDeleteProject(project) {
    dispatch(ProjectsActions.deleteProjectRequest(project));
  }

  function handleCreateCategory() {
    dispatch(CategoriesActions.openCategoryModal());
  }

  function handleUploadFiles(project) {
    dispatch(ProjectsActions.selectProject(project));
    dispatch(FilesActions.openModalUpload());
  }

  const works = useSelector(state => state.projects);
  const { projectModalOpen } = useSelector(state => state.projects);
  const { modalUploadOpen } = useSelector(state => state.files);
  const categories = useSelector(state => state.categories);
  const { categoryModalOpen } = categories;
  let loggedin = store.getState().auth.signedIn;

  return (
    <Container>
      <h4>TrABalHo</h4>
      {loggedin && (
        <Dashboard>
          <Button type="button" onClick={handleAddProject}>
            Add Project
          </Button>
          <Button type="button" onClick={handleCreateCategory}>
            Add Category
          </Button>
        </Dashboard>
      )}

      <ContainerWorks>
        {works.data.map((work, index) => {
          const thumb =
            work.files && work.files.find(file => file.id === work.file_id);
          const workCategories = categories.data.find(
            cat => work.category_id === cat.id
          );
          return (
            <Work
              key={work.id}
              color={scale((100 * index) / works.data.length / 100)}
              image={thumb && thumb.url}
            >
              {loggedin && (
                <>
                  <p>{work.title}</p>
                  <p>
                    {workCategories &&
                      workCategories.map(workCat => workCat.title)}
                  </p>
                  <ul>
                    {work.files &&
                      work.files.map(file => (
                        <img
                          key={file.id}
                          src={file.url}
                          widht="25px"
                          height="25px"
                        ></img>
                      ))}
                  </ul>
                  <Dashboard>
                    <Button
                      size="small"
                      onClick={() => handleUploadFiles(work)}
                    >
                      <FontAwesomeIcon icon={faUpload} />
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleDeleteProject(work)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </Dashboard>
                </>
              )}
            </Work>
          );
        })}
      </ContainerWorks>

      {categoryModalOpen && <CategoryCreateModal />}
      {projectModalOpen && <ProjectCreateModal />}

      {modalUploadOpen && <UploadFiles />}
    </Container>
  );
}

export default Works;
