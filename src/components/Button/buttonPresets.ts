import {ThemeColor} from '../../theme/theme';
import {TouchableOpacityBoxPros} from '../Box/box';
import {ButtonsPreset} from './Button';

//INTERFACE PARA VARIAÇÃO DO BOTÃO
interface ButtonUI {
  container: TouchableOpacityBoxPros; //TouchableOpacityBox
  content: ThemeColor; // text ou loading
}
// Mapeando de uma interface para outra
export const buttonPresets: Record<
  ButtonsPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderColor: 'primary',
        borderWidth: 1,
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
