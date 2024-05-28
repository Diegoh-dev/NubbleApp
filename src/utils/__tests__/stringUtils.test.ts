import {stringUtils} from '@utils';

test('capitalizeFistLetter', () => {
  // escrever meu teste
  stringUtils.capitalizeFirstLetter('Ana maria'); //Ana Maria
  stringUtils.capitalizeFirstLetter('ANA MARIA'); //Ana Maria
  stringUtils.capitalizeFirstLetter('maRiA'); //Maria

  const nome = stringUtils.capitalizeFirstLetter('Ana eduarda');
  // toBe => verifica se é igual
  expect(nome).toBe('Ana Eduarda');
});


