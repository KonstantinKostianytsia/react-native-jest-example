import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {CustomButton} from 'components/atoms/CustomButton';
import {mockedParams} from './__mocks__/CustomButton.mock';

describe('Button: ', () => {
  it('OnPress property is called on click', () => {
    const component = render(<CustomButton {...mockedParams} />);
    const label = component.getByTestId('ButtonTitle');
    fireEvent.press(label);
    expect(mockedParams.onPress).toHaveBeenCalledTimes(1);
  });
});
