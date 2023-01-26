import React from "react";
import Map from "./Map";
import Restaurant from "./Restaurant";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Main extends React.Component {
  render() {
    return (
      <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City"/>
            <Button variant="primary" type="submit" onClick={this.displaySearch}>
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>

      <Map />
      <Restaurant />
      </>
    );
  }
}

export default Main;
