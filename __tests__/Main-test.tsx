import React from 'react';
import {render} from '@testing-library/react-native';
import Main from '../src/screens/Main';

const setup = () => {
  return render(<Main />);
};

describe('Main screen', () => {
  it('renders without crashing', () => {
    const component = setup().toJSON();
    expect(component).toMatchSnapshot();
  });
});
