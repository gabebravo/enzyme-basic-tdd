import React, { Component } from 'react';

export default class Gift extends Component {
  state = {
    person: '',
    present: ''
  };

  handleChange = ev => this.setState({ [ev.target.name]: ev.target.value });

  render() {
    const { giftId, removeGift } = this.props;
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
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
        <button className="remove-button" onClick={() => removeGift(giftId)}>
          Remove
        </button>
      </div>
    );
  }
}
