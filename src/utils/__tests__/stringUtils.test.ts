import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFistLetter', () => {
    it('should capitalize the first letter of each word', () => {
      // escrever meu teste

      // toBe => verifica se é igual
      expect(stringUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('maria')).toBe('Maria');
      expect(stringUtils.capitalizeFirstLetter('MARIA')).toBe('Maria');
      expect(stringUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' Ana Maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('Ana Maria ')).toBe('Ana Maria');
    });
  });
});
