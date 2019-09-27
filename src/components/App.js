import React, { Component } from 'react';

export default class App extends Component {
  state = {
    gifts: []
  };

  addGift = () =>
    this.setState(prevGifts => ({
      gifts: [...prevGifts.gifts, { id: prevGifts.gifts.length + 1 }]
    }));

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <button onClick={this.addGift}>Add Gift</button>
      </div>
    );
  }
}
