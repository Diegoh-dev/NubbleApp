import {sub, add, formatISO, Duration} from 'date-fns';

import {dateUtils} from '../dateUtils';

//SECONDS SINCE JAN 01 1970 (TIMESTAMP)
const MOCKED_NOW = 1717091126;

function getDateISO(duration: Duration,op:'sub' | 'add' =  'sub'): string {
  const time = op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}
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

      expect(getDateISO({seconds: 30})).toBe('30 s');
    });

    test('should be displayed in minute if less than 1 hour ago ', () => {
      expect(getDateISO({minutes: 20})).toBe('20 m');
    });

    test('should be displayed in hour if lass than 1 day ago', () => {
      expect(getDateISO({hours: 20})).toBe('20 h');
    });

    test('should be displayed in days if less than 7 day ago', () => {
      expect(getDateISO({days: 5})).toBe('5 d');
    });

    test('should be displayed in week if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 3, hours: 2})).toBe('3 sem');
    });
    test('should be displayed in months if less than 12 months ago', () => {
      expect(getDateISO({months: 10})).toBe('10 mes');
    });

    test('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 13})).toBe('20/12/1968');
    });
    test('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({days: 2},'add')).toBe('22/01/1970');
    });
  });
});

// QUANDO O mockImplementation É USADO TODA A MINHA ESTRUTURA DE TESTE QUE ESTIVER USUANDO O METODO NOW VAI SER IMPACTADO POR ELE.
// MESMO SE O TESTE NÃO ESTIVER FAZENDO O MOCKED,PARA ISSO É NECESSÁRIO USAR O (BEFOREALL E AFTERALL);
