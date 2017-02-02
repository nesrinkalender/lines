import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <fieldset>
        <button type={this.props.type} onClick={this.props.onClick} disabled={this.props.disable}> {this.props.value}</button>
      </fieldset>
    );
  }
}

export default Button;
