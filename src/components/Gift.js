import React, { Component } from 'react';

export default class Gift extends Component {
  state = {
    person: '',
    present: ''
  };

  handleChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="gift recipients name"
          className="input-person"
          name="person"
        />
        <input
          onChange={this.handleChange}
          placeholder="gift recipients name"
          className="input-present"
          name="present"
        />
      </div>
    );
  }
}
