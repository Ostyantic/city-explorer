import React from "react";
import Map from "./Map";
import Restaurant from "./Restaurant";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      displayInfo: false
    }
  }

  displaySearch = (e) => {
    e.preventDefault();
    this.setState({
      displayInfo: true
    })
    
  }

  render() {
    return (
      <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City"/>
            <Button onClick={this.displaySearch}>Explore!</Button>
          </Form.Group>
        </Form>
      </Container>

      {this.state.displayInfo &&
      <>
      <Map />
      <Restaurant />
      </>
      }
      </>
    );
  }
}

export default Main;
