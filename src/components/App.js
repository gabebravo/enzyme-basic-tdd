import React, { Component } from 'react';

export default class App extends Component {
  state = {
    gifts: []
  };

  addGift = () =>
    this.setState(prevGifts => ({
      gifts: [...prevGifts.gifts, { id: prevGifts.gifts.length + 1 }]
    }));

  renderGifts = () =>
    [...this.state.gifts].map(gift => <div key={gift.id}>{gift.id}</div>);

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <button onClick={this.addGift}>Add Gift</button>
        {this.state.gifts && this.renderGifts(this.state.gifts)}
      </div>
    );
  }
}
