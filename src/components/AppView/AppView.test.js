import React from 'react';
import { shallow } from 'enzyme';
import { AppView } from './AppView';

describe('AppValues Tests', () => {
  it('should display properly before form submission', () => {
    const component = shallow(<AppView />);
    expect(component).toMatchSnapshot();
  });
  it('should display properly after form submission', () => {
    const state = {
      valuesSubmitted: true,
      values: {
        sampleSize: 12,
        sampleMean: 1.2,
        standardDeviation: 2.3,
        testHypothesis: false,
      }
    }
    const component = shallow(<AppView />);
    component.setState(state, () => {
      expect(component).toMatchSnapshot();
    });
  });
});