import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";
import { reducer as auth } from "./auth";
import { reducer as projects } from "./projects";
import { reducer as files } from "./files";
import { reducer as slide } from "./slide";

export default history =>
  combineReducers({
    auth,
    toastr,
    projects,
    files,
    slide,
    router: connectRouter(history)
  });
