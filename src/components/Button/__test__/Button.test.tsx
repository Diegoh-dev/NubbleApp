import React from 'react';
import {StyleSheet} from 'react-native';

import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderButton(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);

  //https://testing-library.com/docs/react-testing-library/cheatsheet/
  //https://callstack.github.io/react-native-testing-library/docs/api#screen-api
  const titleElement = screen.getByText(/Button Title/i);
  return {
    titleElement,
  };
}
describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    // Cria uma função simulada.
    const mockedOnPress = jest.fn();
    const {titleElement} = renderButton({onPress: mockedOnPress});
    // vai simular o click no botão "button title"
    fireEvent.press(titleElement);
    // espera que a função tenha sido chamada
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderButton({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement);
    // negando que a função não seja chamada
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if button is disabled', () => {
    const {titleElement} = renderButton({disabled: true});
    //https://reactnative.dev/docs/stylesheet#flatten
    // flatten => junta as propriedades de estilos
    const titleStyle = StyleSheet.flatten(titleElement.props.style);
    //  console.log(titleElement.props.style)
    //  console.log(styleText)
    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });
});
