import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import CheckForHome from "../utils/checkForHome";

const Home = lazy(() => import("./../routes/home"));
const Login = lazy(() => import("./../routes/login"));
const Registro = lazy(() => import("./../routes/registro"));

const Error404 = lazy(() => import("./../routes/error404"));

const AppRoutes = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <CheckForHome exact path="/login" component={() => <Login />} />
      <CheckForHome exact path="/registro" component={() => <Registro />} />
      <Route path="*" component={() => <Error404 />} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
