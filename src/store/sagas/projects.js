import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../services/api";

import ProjectsActions from "../ducks/projects";

export function* getProjects() {
  const response = yield call(api.get, "projects");

  yield put(ProjectsActions.getProjectsSuccess(response.data));
}

export function* updateProject() {
  const { id } = JSON.parse(localStorage.getItem("@portifolio:project"));
  const response = yield call(api.get, `projects/${id}`);

  yield put(ProjectsActions.updateProjectSuccess(response.data));
}

export function* createProject({ title, description }) {
  try {
    const response = yield call(api.post, "projects", {
      title,
      description
    });
    yield put(ProjectsActions.createProjectSuccess(response.data));
    yield put(ProjectsActions.closeProjectModal());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "error",
        message: "Houve um erro, tente novamente"
      })
    );
  }
}

export function* deleteProject({ project }) {
  try {
    yield call(api.delete, `projects/${project.id}`);
    yield put(ProjectsActions.deleteProjectSuccess(project.id));
  } catch (err) {
    console.log(err);
  }
}
