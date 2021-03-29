import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import Logged from "../utils/CheckLogged";

const Home = lazy(() => import("./../routes/home"));
const Login = lazy(() => import("./../routes/login"));
const Registro = lazy(() => import("./../routes/registro"));

const Error404 = lazy(() => import("./../routes/error404"));

const AppRoutes = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Logged exact path="/login" component={() => <Login />} />
      <Logged exact path="/registro" component={() => <Registro />} />
      <Route path="*" component={() => <Error404 />} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
