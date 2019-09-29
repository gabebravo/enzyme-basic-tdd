import React from 'react';
import { shallow, configure } from 'enzyme';
import Gift from '../components/Gift';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Gift', () => {
  const gift = shallow(<Gift />);

  // test the component against the snapshot
  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and a gift in state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle';
    beforeEach(() => {
      gift
        .find('.input-person') // simulate below on change - the 2nd param obj is the ev.target obj
        .simulate('change', { target: { value: person } });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });
});
