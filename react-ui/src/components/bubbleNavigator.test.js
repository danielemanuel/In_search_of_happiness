import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import BubbleNavigator from './bubbleNavigator';
import {mount, render, shallow} from 'enzyme';


describe('BubbleNavigator', () => {
  let bubbleNavigator = null;

  beforeEach(() => {
    bubbleNavigator = mount(
      <BubbleNavigator />
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BubbleNavigator />, div);
  });

  it('has svg section', () => {
    expect(bubbleNavigator.find('svg').html()).toContain('<svg width=\"1000\" height=\"650\">');
  });

  it('displays media industry', () => {
    expect(bubbleNavigator.find('#Media').html()).toContain('<text>Media</text>');
  });

  it('displays media industry as an 80r circle with a fill', () => {
    expect(bubbleNavigator.find('#Media').html()).toContain('<circle r=\"80\" fill=\"');
  });

  // it('media item renders media companies on click', () => {
  //   expect(bubbleNavigator.)

  it('tests if the media industry circle moves', () => {
    const mediaCirclePosition = bubbleNavigator.find('#Media').html();
    expect(mediaCirclePosition).not.toEqual(bubbleNavigator.find('#Media').html());
  });
});
