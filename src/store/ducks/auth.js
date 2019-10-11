import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["token"],
  signUpRequest: ["name", "email", "password"],
  signOut: null,
  getPermissionsSuccess: ["roles", "permissions"]
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem("@portifolio:token"),
  token: localStorage.getItem("@portifolio:token") || null,
  roles: [],
  permissions: []
});

/* Reducers */

export const success = (state, { token }) =>
  state.merge({ signedIn: true, token });
export const logout = state => state.merge({ signedIn: false, token: null });
export const permissionSuccess = (state, { roles, permissions }) =>
  state.merge({ roles, permissions });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.GET_PERMISSIONS_SUCCESS]: permissionSuccess
});
