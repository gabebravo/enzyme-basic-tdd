import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({ adapter: new Adapter() });
const app = shallow(<App />);
// console.log(app.debug());

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  app.find('button').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
