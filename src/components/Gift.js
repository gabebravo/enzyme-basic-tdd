import React, { Component } from 'react';

export default class Gift extends Component {
  state = {
    person: '',
    present: ''
  };

  handleChange = ev => this.setState({ person: ev.target.value });

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="gift recipients name"
          className="input-person"
          name="person"
        />
      </div>
    );
  }
}
