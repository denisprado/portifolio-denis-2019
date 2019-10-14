import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getProjectsRequest: null,
  getProjectsSuccess: ["data"],
  selectProject: ["project"],
  updateProjectRequest: null,
  updateProjectSuccess: ["project"],
  getProjectSuccess: ["project"],
  openProjectModal: null,
  closeProjectModal: null,
  createProjectRequest: ["title", "description"],
  createProjectSuccess: ["project"],
  deleteProjectRequest: ["project"],
  deleteProjectSuccess: ["id"]
});

export const ProjectsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  projectModalOpen: false,
  project: null
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });
export const deleteSuccess = (state, { id }) => {
  localStorage.removeItem("@portifolio:project");

  return state.merge({
    data: [...state.data.filter(proj => proj.id !== id)],
    active: null
  });
};

export const showProject = (state, { project }) => {
  localStorage.setItem("@portifolio:project", JSON.stringify(project));
  return state.merge({ active: project });
};
export const updateProject = (state, { project }) => {
  localStorage.setItem("@portifolio:project", JSON.stringify(project));
  return state.merge({ active: project });
};
export const logout = state => state.merge({ signedIn: false, token: null });
export const openModal = state => state.merge({ projectModalOpen: true });
export const closeModal = state => state.merge({ projectModalOpen: false });
export const createSuccess = (state, { project }) =>
  state.merge({ data: [...state.data, project] });
export const setMapTrue = state => state.merge({ mapView: true });
export const setListTrue = state => state.merge({ mapView: false });
/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PROJECTS_SUCCESS]: getSuccess,
  [Types.SELECT_PROJECT]: showProject,
  [Types.UPDATE_PROJECT_SUCCESS]: updateProject,
  [Types.OPEN_PROJECT_MODAL]: openModal,
  [Types.CLOSE_PROJECT_MODAL]: closeModal,
  [Types.CREATE_PROJECT_SUCCESS]: createSuccess,
  [Types.DELETE_PROJECT_SUCCESS]: deleteSuccess
});
