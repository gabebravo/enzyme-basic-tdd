import React from 'react';
import { shallow, configure } from 'enzyme';
import Gift from '../components/Gift';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Gift', () => {
  // mock instance of a jest function
  const mockRemove = jest.fn(() => true);
  const id = 1;
  const props = { id, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  // test the component against the snapshot
  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and a gift in state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const name = 'person';
    const person = 'Uncle';
    beforeEach(() => {
      gift
        .find('.input-person') // simulate below on change - the 2nd param obj is the ev.target obj
        .simulate('change', { target: { name, value: person } });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const name = 'present';
    const present = 'Polo shirt';
    beforeEach(() => {
      gift
        .find('.input-present') // simulate below on change - the 2nd param obj is the ev.target obj
        .simulate('change', { target: { name, value: present } });
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.remove-button').simulate('click');
    });

    // we need a jest mock function to run this test - look up top
    // all this does is check that the function was run
    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalled();
    });
  });
});
