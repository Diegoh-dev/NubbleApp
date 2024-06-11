import React from 'react';

import {render, screen} from 'test-utils';

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
    expect(inputElement.props.secureTextEntry).toBeTruthy();
    //  screen.debug();
  });
});
