import { call, put, select } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import { push } from "connected-react-router";
import api from "../../services/api";
import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "sessions", { email, password });

    localStorage.setItem("@portifolio:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push("/"));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no Login",
        message: "Verifique seu email/senha"
      })
    );
  }
}

export function* signOut() {
  localStorage.removeItem("@portifolio:token");
  localStorage.removeItem("@portifolio:team");

  yield put(push("/"));
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, "users", { name, email, password });

    localStorage.setItem("@portifolio:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push("/"));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no Cadastro",
        message: "Você foi convidado para algum time?"
      })
    );
  }
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn || !team) {
    return;
  }

  const response = yield call(api.get, "permissions");
  const { roles, permissions } = response.data;

  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
