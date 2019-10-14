import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import ProjectsActions from "../../store/ducks/projects";
import { ModalForm, ModalInput } from "../Modal/styles";
import Button from "../../styles/components/Buttons";

// import { Container } from './styles';

function ProjectCreateModal() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);

  function handleNewProjectSubmit({ title, description }) {
    console.log(title);
    dispatch(ProjectsActions.createProjectRequest(title, description));
  }

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        dispatch(ProjectsActions.closeProjectModal());
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [dispatch]);

  return projects.projectModalOpen ? (
    <Modal size="big">
      <h1>Criar projeto</h1>
      <ModalForm onSubmit={handleNewProjectSubmit}>
        <span>Nome</span>
        <ModalInput name="title" id="title" />

        <span>Description</span>
        <ModalInput multiline rows="5" name="description" />

        <Button size="big" type="submit">
          Salvar
        </Button>
        <Button
          onClick={() => {
            dispatch(ProjectsActions.closeProjectModal());
          }}
          size="small"
          color="gray"
        >
          Cancelar
        </Button>
      </ModalForm>
    </Modal>
  ) : null;
}

export default ProjectCreateModal;
