import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import routes from "../routes";

import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      {routes.map((prop, key) => {
        return (
          <Route exact key={key} path={prop.path} component={prop.component} />
        );
      })}
    </Switch>
  </Container>
);

export default Content;
