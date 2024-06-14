import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {IconProps} from '@components';

import {PassWordInput} from '../PasswordInput';

describe('<PasswordInput/>', () => {
  it('start with hidden password', () => {
    const mockedOnChange = jest.fn();
    render(
      <PassWordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/Password/i);
    //Verifica se a senha esta escondida com a propreidade => secureTextEntry
    expect(inputElement.props.secureTextEntry).toBeTruthy();
    //  screen.debug();
  });

  it('when pressing the eye icon, it should the password, and change to the eye off icon', () => {
    const mockedOnChange = jest.fn();
    render(
      <PassWordInput
        label="Password"
        placeholder="Password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const eyeOnIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeOnIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffElement = screen.getByTestId(eyeOffIcon);

    expect(eyeOffElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/Password/i);
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
