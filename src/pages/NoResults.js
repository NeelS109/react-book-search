
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const NoResults = () => {
  return (
    <Container fluid>
      <Row fluid>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books Search</h1>
            <p>Search for books and save them for future reference!</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoResults;