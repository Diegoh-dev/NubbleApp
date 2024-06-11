import React from 'react';
import {StyleSheet} from 'react-native';

import {ReactTestInstance} from 'react-test-renderer';
import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderButton(props?: Partial<ButtonProps>) {
  render(<Button title="Button Title" {...props} />);

  //https://testing-library.com/docs/react-testing-library/cheatsheet/
  //https://callstack.github.io/react-native-testing-library/docs/api#screen-api
  //getByText
  const titleElement = screen.queryByText(/Button Title/i);
  //getByTestId => lança um erro se não encontrar
  const loadingElement = screen.queryByTestId('activity-indicator');
  const buttonElement = screen.getByTestId('button');
  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}
describe('<Button />', () => {
  it('calls the onPress function when it is pressed', () => {
    // Cria uma função simulada.
    const mockedOnPress = jest.fn();
    const {titleElement, loadingElement} = renderButton({
      onPress: mockedOnPress,
    });
    // vai simular o click no botão "button title"
    fireEvent.press(titleElement as ReactTestInstance);
    // espera que a função tenha sido chamada
    expect(mockedOnPress).toHaveBeenCalled();
    // não está aparecendo
    expect(loadingElement).toBeFalsy();
  });

  it('does not call onPress function when it is disabled and it pressed', () => {
    const mockedOnPress = jest.fn();

    const {titleElement} = renderButton({
      onPress: mockedOnPress,
      disabled: true,
    });

    fireEvent.press(titleElement as ReactTestInstance);
    // negando que a função não seja chamada
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if button is disabled', () => {
    const {titleElement} = renderButton({disabled: true});
    //https://reactnative.dev/docs/stylesheet#flatten
    // flatten => junta as propriedades de estilos
    const titleStyle = StyleSheet.flatten(titleElement?.props.style);
    //  console.log(titleElement.props.style)
    //  console.log(styleText)
    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });

  describe('when button is loading', () => {

    it('show activity indicator', () => {
      const {loadingElement} = renderButton({loading: true});
      // espera-se que o loading esteja na tela quando loading for true
      expect(loadingElement).toBeTruthy();
    });

    it('hides button title', () => {
      const {titleElement} = renderButton({loading: true});
      expect(titleElement).toBeFalsy();
    });

    it('disabled onPress function', () => {
      const mockedOnPress = jest.fn();
      const {buttonElement} = renderButton({
        loading: true,
        onPress: mockedOnPress,
      });

      fireEvent.press(buttonElement);

      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});


// OUTRA FORMA DE ESCREVER OS TESTES DE LOADING 
//test.only => roda apenas esse teste
// test.only('when button is loading, It show activity indicator, it hides button title, it disabled onPress function', () => {
//   const mockedOnPress = jest.fn();

//   const {loadingElement, buttonElement, titleElement} = renderButton({
//     loading: true,
//     onPress: mockedOnPress,
//   });

//   fireEvent.press(buttonElement);
//   expect(mockedOnPress).not.toHaveBeenCalled();
//   expect(titleElement).toBeFalsy();
//   expect(loadingElement).toBeTruthy();
// });
