import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
const styles = { margin: "100px 0px 0px 0px" };

export const About = () => (
  <Jumbotron fluid style={styles}>
    <Container>
      <h1>About Page</h1>
      <p>All the info that you need from this App</p>
    </Container>
  </Jumbotron>
);
