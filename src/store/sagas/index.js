import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "../ducks/auth";
import { FilesTypes } from "../ducks/files";
import { ProjectsTypes } from "../ducks/projects";
import { signIn, signOut, signUp } from "./auth";
import { uploadFiles } from "./files";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject
} from "./projects";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
    takeLatest(ProjectsTypes.CREATE_PROJECT_REQUEST, createProject),
    takeLatest(ProjectsTypes.DELETE_PROJECT_REQUEST, deleteProject),
    takeLatest(ProjectsTypes.DELETE_PROJECT_SUCCESS, getProjects),

    takeLatest(FilesTypes.UPLOAD_FILES_REQUEST, uploadFiles),
    takeLatest(FilesTypes.UPLOAD_FILES_SUCCESS, updateProject)
  ]);
}
