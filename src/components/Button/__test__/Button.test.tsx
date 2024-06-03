import React from 'react';

import {render, fireEvent, screen} from 'test-utils';

import {Button, ButtonProps} from '../Button';

function renderButton(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);

  //https://testing-library.com/docs/react-testing-library/cheatsheet/
  //https://callstack.github.io/react-native-testing-library/docs/api/queries#accessing-queries
  const titleElement = screen.getByText(/Button Title/i);
  return {
    titleElement,
  };
}
describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    // Cria uma função simulada.
    const mockedOnPress = jest.fn();
    const {titleElement} = renderButton({ onPress: mockedOnPress});
    // vai simular o click no botão "button title"
    fireEvent.press(titleElement);
    // espera que a função tenha sido chamada
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderButton({ onPress: mockedOnPress, disabled: true});

    fireEvent.press(titleElement);
    // negando que a função não seja chamada
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

});
