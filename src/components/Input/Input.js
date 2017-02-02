import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <fieldset className={this.props.className}>
        <input value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} type={this.props.type}></input>
        <span className={this.props.spanClass}></span>
      </fieldset>
    );
  }
}

export default App;
