import React from 'react';
import { Alert } from 'react-bootstrap';


class Error extends React.Component {
  render() {
    return (
      <Alert  variant='warning' onClose={this.props.show} dismissible>
        <Alert.Heading>Please enter a location!</Alert.Heading>
      </Alert>
    )
  }
}

export default Error;