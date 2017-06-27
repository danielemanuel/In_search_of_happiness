import React from 'react';
import ReactDOM from 'react-dom';
import BubbleNavigator from './bubbleNavigator';
import {shallow} from 'enzyme';


describe('BubbleNavigator', () => {
  let bubbleNavigator = null;

  beforeEach(() => {
    bubbleNavigator = shallow(
      <BubbleNavigator />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BubbleNavigator />, div);
  });

  it('displays media industry', () => {
    expect(bubbleNavigator.find('#media').text()).toEqual('Media');
  });
});
