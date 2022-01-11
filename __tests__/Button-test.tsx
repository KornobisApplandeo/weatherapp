import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '../src/components';

const onPress = jest.fn();

const setup = () => {
  return render(<Button title="test" isLoading={false} onPress={onPress} />);
};

describe('Button component', () => {
  it('renders without crashing', () => {
    const component = setup().toJSON();
    expect(component).toMatchSnapshot();
  });
});
