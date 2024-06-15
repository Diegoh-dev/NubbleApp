import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import { mokedPost } from './mockedData/mockedPost.test';



const mockedNavigate = jest.fn();
// usando o mock o jest substitui toda a importação da importação "@react-navigation/native", pelo nosso mock
// para sinalizar para o jest que as outras importações da lib eu quero usar as reais eu uso o "const originalModule = jest.requireActual('@react-navigation/native');"
// e repasso para o mock os modulos originais, apenas o usenavigation irá sobrescrever o do modulo original
//https://jestjs.io/docs/mock-functions#mocking-partials
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom/>', () => {
  //OBSERVAÇÃO : SEMPRE QUES ESTIVER USADO MOCKS, TESTAR OS TESTE SEPARADAMENTE E TAMBEM RODANDO A SUITE DE TESTE COMPLETA, POIS PODE OCORRER DE FALHAR O TESTE SE RODAR INDIVIDUALMENTE, MAS PASSAR SE RODAR A SUITE INTEIRA.

  // PARA CADA TESTE RODADO O MOCK SERÁ LIMPADO.
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mokedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('navigates to PostCommentScreen when pressing the comment link', () => {
    render(<PostBottom {...mokedPost} commentCount={4} />);
    //https://reactnavigation.org/docs/navigating-without-navigation-prop/#handling-initialization
    // o react navigation dar essa opção para inicializa-lo como referencia, mas nesse caso usaremos a
    //https://jestjs.io/docs/mock-functions#mocking-partials
    const commentLinkElement = screen.getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    // expect call navigate function with param
    // toHaveBeenCalledWith => QUANDO QUISER ESPECIFICAR O PARAMETRO DA FUNÇÃO CHAMADA
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mokedPost.id,
      postAuthorId: mokedPost.author.id,
    });
  });

  // ESSE TESTE FALHA, USADO APENAS PARA TESTAR O EFEITO DO MOCK
//   it('outro teste', () => {
//     //mockedNavigate => fica global, por isso esse teste falha se rodar individual, mas passa se rodar o suite de teste;
//     // por isso deve usar o resetMokec a cada teste
//     render(<PostBottom {...mokedPost} commentCount={4} />);

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const commentLinkElement = screen.getByText(/comentário/);

//     // fireEvent.press(commentLinkElement);

//     expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
//       postId: mokedPost.id,
//       postAuthorId: mokedPost.author.id,
//     });
//   });
});
