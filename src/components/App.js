import React, { Component } from 'react';
import Gift from './Gift';

export default class App extends Component {
  state = {
    gifts: []
  };

  addGift = () =>
    this.setState(prevGifts => ({
      gifts: [...prevGifts.gifts, { id: prevGifts.gifts.length + 1 }]
    }));

  removeGift = id =>
    this.setState(prevGifts => ({
      gifts: [...prevGifts.gifts].filter(gift => gift.id !== id)
    }));

  renderGifts = () =>
    [...this.state.gifts].map(gift => (
      <Gift key={gift.id} giftId={gift.id} removeGift={this.removeGift} />
    ));

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Gift Giver</h2>
        <button onClick={this.addGift}>Add Gift</button>
        <div id="gifts-wrapper">
          {this.state.gifts && this.renderGifts(this.state.gifts)}
        </div>
      </div>
    );
  }
}
