import React from 'react';
import { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
