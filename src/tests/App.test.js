import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';
configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);
  // console.log(app.debug());

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('button').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the rendered list', () => {
      const giftsWrapper = app.find('#gifts-wrapper').children();
      expect(giftsWrapper.length).toEqual(app.state().gifts.length);
    });

    it('creates a `gift component`', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to removes a gift form the list', () => {
      beforeEach(() => {
        // instance give the entire comp with methods that can be called
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
