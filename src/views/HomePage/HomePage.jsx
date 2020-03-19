import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames";
const styles = {
  margin: "100px 0px 0px 0px",
  border: "5px solid gray"
};

export const HomePage = () => (
  //jumbotron te da un large greeding en la homepage

  <Jumbotron style={styles}>
    <h1>Rick and Morty 1.1</h1>
    <p>
      Example app to show with React, Axios, React-router, React prime and much
      more!
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
);
