import React from "react";
import { Header } from "./views/_components/Header";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { About } from "./views/About";
import { HomePage } from "./views/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import { PageNotFound } from "./views/PageNotFound";
import { Characters } from "./views/Characters";
export function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/Characters" component={Characters} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
