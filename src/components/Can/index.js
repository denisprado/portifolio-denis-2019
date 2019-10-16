import { useSelector } from "react-redux";
/*
function checkAuth({ roles, permissions }) {
  // Se existe a regra e não está incluída nas permissões do usuário
  if (checkRole && !roles.includes(checkRole)) return false;

  if (checkPermission && !permissions.includes(checkPermission)) return false;

  return true;
}*/

function checkAuth({ signedIn }) {
  // Se existe a regra e não está incluída nas permissões do usuário
  if (!signedIn) return false;

  return true;
}

function Can({ children }) {
  const auth = useSelector(state => state.auth);

  return typeof children === "function"
    ? children(checkAuth(auth))
    : checkAuth(auth) && children;
}

export default Can;
