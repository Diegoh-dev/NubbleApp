import React from 'react';

import {render, fireEvent} from 'test-utils';

import {Button} from '../Button';
describe('<Button />', () => {
  it('calls the onPress function when is pressed', () => {
    // Cria uma função simulada.
    const mockedOnPress = jest.fn();
    const {getByText} = render(
      <Button title="Button Title" onPress={mockedOnPress} />,
    );

    //https://testing-library.com/docs/react-testing-library/cheatsheet/
    const titleElement = getByText(/button title/i);

    // vai simular o click no botão "button title"
    fireEvent.press(titleElement);
    // espera que a função tenha sido chamada
    expect(mockedOnPress).toHaveBeenCalled();
  });

  // it('should shows loading indicator', () => {
  //   render(<Button title="Teste render" />);
  // });
});
