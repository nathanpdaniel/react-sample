import React from 'react';
import { shallow } from 'enzyme';
import { AppValues } from './AppValues';

describe('AppValues Tests', () => {
  it('should display properly sans test hypothesis', () => {
    const onBack = jest.fn();
    const values = {
      sampleSize: 123,
      sampleMean: 1.23,
      standardDeviation: -1.5,
      testHypothesis: false
    }
    const component = shallow(<AppValues values={values} onBack={onBack} />);
    expect(component).toMatchSnapshot();
  });
  it('should display properly with test hypothesis', () => {
    const onBack = jest.fn();
    const values = {
      sampleSize: 123,
      sampleMean: 1.23,
      standardDeviation: -1.5,
      testHypothesis: true,
      hypothesizedMean: 2.34
    }
    const component = shallow(<AppValues values={values} onBack={onBack} />);
    expect(component).toMatchSnapshot();
  });
});