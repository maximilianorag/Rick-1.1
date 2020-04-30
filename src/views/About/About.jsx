import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
const styles = { paddingTop: 100 };

export const About = () => (
  <div style={styles}>
    <Jumbotron fluid>
      <Container>
        <h1>About Page</h1>
        <p>All the info that you need from this App</p>
      </Container>
    </Jumbotron>
  </div>
);
