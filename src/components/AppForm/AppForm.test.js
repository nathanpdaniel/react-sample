import React from 'react';
import { shallow } from 'enzyme';
import AppForm from './AppForm';

describe('AppForm Tests', () => {
  it('should display properly', () => {
    const component = shallow(<AppForm />);
    expect(component).toMatchSnapshot();
  });
});