import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class ButtonLink extends React.Component {
  constructor() {
      super();
      this.state = {
          redirect: false
      }
  }
    handleOnClick = () => {
        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/"/>;
        }
        return (
            <button id="closeButton" onClick={() => this.handleOnClick()}>X</button>
        )
    }
}

export default ButtonLink;
