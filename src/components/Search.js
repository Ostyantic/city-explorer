import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Search extends React.Component {
  render() {
    return (
      <>
        <Form
          className="d-flex justify-content-center"
          onSubmit={this.props.submit}
        >
          <Form.Group>
            <Form.Label style={{ textAlign: "center" }}>City</Form.Label>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                placeholder="City"
                onChange={this.props.changeInput}
                style={{ width: "200px" }}
              />
              <Button onClick={this.props.submit}>Explore!</Button>
            </Form.Group>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default Search;
