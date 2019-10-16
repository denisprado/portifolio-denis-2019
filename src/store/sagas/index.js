import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "../ducks/auth";
import { FilesTypes } from "../ducks/files";
import { ProjectsTypes } from "../ducks/projects";
import { CategoriesTypes } from "../ducks/categories";
import { signIn, signOut, signUp } from "./auth";
import { uploadFiles } from "./files";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject
} from "./projects";
import { createCategory, deleteCategory, getCategories } from "./categories";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getCategories),
    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
    takeLatest(ProjectsTypes.CREATE_PROJECT_REQUEST, createProject),
    takeLatest(ProjectsTypes.DELETE_PROJECT_REQUEST, deleteProject),
    takeLatest(ProjectsTypes.DELETE_PROJECT_SUCCESS, getProjects),

    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoriesTypes.CREATE_CATEGORY_REQUEST, createCategory),
    takeLatest(CategoriesTypes.DELETE_CATEGORY_REQUEST, deleteCategory),
    takeLatest(CategoriesTypes.DELETE_CATEGORY_SUCCESS, getCategories),

    takeLatest(FilesTypes.UPLOAD_FILES_REQUEST, uploadFiles),
    takeLatest(FilesTypes.UPLOAD_FILES_SUCCESS, updateProject),
    takeLatest(FilesTypes.UPLOAD_FILES_SUCCESS, getProjects)
  ]);
}
