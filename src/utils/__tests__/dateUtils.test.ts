import {sub, formatISO} from 'date-fns';

import {dateUtils} from '../dateUtils';

//SECONDS SINCE JAN 01 1970 (TIMESTAMP)
const MOCKED_NOW = 1717091126;
describe('dateUtils', () => {
  describe('formaRelative', () => {
    // RODA UMA VEZ ANTES DE TODOS OS TESTE; se chamar o beforeEach => roda uma vez a cada novo teste
    beforeAll(() => {
      // o data está sendo mockada, pois caso tenha um breack point na função o no teste, as horas vão está diferentes e o teste vai falhar.
      //estou mockando o o Date mais apenas o metodo "now".
      // mockImplementation => vai substituir a implementação do Date.now no código. ou sejá se chamar o Date.now a minha implementação MOCKED_NOW vai ser chamada.
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      // DEPOIS QUE A SWITCH DESSE TESTE FINALIZAR, ELE LIMPA OS MOCKS, PARA QUE EM OUTRA PARTE DO CÓDIGO QUE ESTEJA CHAMANDO O METODO DATE.NOW() NÃO PEGAR A NOSSA IMPLEMEMTAÇÃO MOCKADA.
      // ASSIM O OUTRO TESTE OU FUNÇÃO QUE ESTIVER USANDO O DATE.NOW() VAI PEGAR A SUA PROPRIA IMPLEMENTAÇÃO OU O VALOR ATUAL DO DATE.NOW();
      jest.clearAllMocks();
    });
    test('should be displayed in seconds if less than 1 minute ago', () => {
      // data com menus de 60 secondos atrás
      // Tirando 30s então a data deve ser 30 segundos atrás;
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });

    test('another test', () => {
      // data com menus de 60 secondos atrás
      // Tirando 30s então a data deve ser 30 segundos atrás;
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);
      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });
  });
});

// QUANDO O mockImplementation É USADO TODA A MINHA ESTRUTURA DE TESTE QUE ESTIVER USUANDO O METODO NOW VAI SER IMPACTADO POR ELE.
// MESMO SE O TESTE NÃO ESTIVER FAZENDO O MOCKED,PARA ISSO É NECESSÁRIO USAR O (BEFOREALL E AFTERALL);
