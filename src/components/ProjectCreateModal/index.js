import { Choice } from "@rocketseat/unform";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProjectsActions from "../../store/ducks/projects";
import Button from "../../styles/components/Buttons";
import Modal from "../Modal";
import { ModalForm, ModalInput } from "../Modal/styles";

// import { Container } from './styles';

function ProjectCreateModal() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);
  const categories = useSelector(state => state.categories);

  const categoriesOption = categories.data.map(cat => ({
    value: cat.id,
    label: cat.title
  }));

  function handleNewProjectSubmit({ title, description, category_id }) {
    dispatch(
      ProjectsActions.createProjectRequest(title, description, category_id)
    );
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
    <>
      <Modal size="big">
        <h1>Criar projeto</h1>
        <ModalForm onSubmit={handleNewProjectSubmit}>
          <span>Nome</span>
          <ModalInput name="title" id="title" />

          <span>Description</span>
          <ModalInput multiline rows="5" name="description" />

          <span>Category</span>
          <Choice name="category_id" options={categoriesOption} multiple />

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
    </>
  ) : null;
}

export default ProjectCreateModal;
