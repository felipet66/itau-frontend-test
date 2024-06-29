import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LogRocket from "logrocket";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import AuthLayout from "layouts/Auth/Auth.js";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const queryClient = new QueryClient();

LogRocket.init("dashboard-aviator/dashboard-aviator");

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Route path="/rtl" render={props => <RTLLayout {...props} />} />
            <Route path="/auth" render={props => <AuthLayout {...props} />} />
            <Redirect from="/" to="/auth/login" />
          </Switch>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  </QueryClientProvider>,
  document.getElementById("root")
);
