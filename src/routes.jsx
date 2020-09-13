import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./Hoc/Hoc";

import Home from "./containers/Home/Home"
import Login from "./containers/Login/Login";

const BaseRouter = () => (
    <Hoc>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Hoc>
);

export default BaseRouter;