import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import { Login } from "./pages/login";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
