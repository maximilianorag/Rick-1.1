import React, { useContext } from "react";
import { Header } from "./views/_components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./stilos.module.css";
import { About } from "./views/About";
import { HomePage } from "./views/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { PageNotFound } from "./views/PageNotFound";
import { Characters } from "./views/Characters";
import { SideBar } from "./_components/SideBar";
export function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar />

        <div className={styles.app}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/characters" component={Characters} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
