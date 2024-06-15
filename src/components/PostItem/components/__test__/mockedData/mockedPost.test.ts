import { Post } from "@domain";
//modulePathIgnorePatterns => https://jestjs.io/docs/configuration#modulepathignorepatterns-arraystring;
//PARA O JEST IGNORAR ESSE ARQUIVO QUANDO TIVE RODANDO A SUITE DE TESTES;
export const mokedPost: Post = {
    id: 1,
    imageURL: 'fake-url',
    commentCount: 3,
    favoriteCount: 2,
    reactionCount: 3,
    text: 'this is the text (post description)',
    author: {
      id: 2,
      name: 'Maria Julia',
      profileURL: 'https://example.com',
      userName: 'mariajulia',
    },
  };