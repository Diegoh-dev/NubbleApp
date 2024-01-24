import {ThemeColor} from '../../theme/theme';
import {TouchableOpacityBoxPros} from '../Box/box';
import {ButtonsPreset} from './Button';

//INTERFACE PARA VARIAÇÃO DO BOTÃO
interface ButtonUI {
  container: TouchableOpacityBoxPros; //TouchableOpacityBox
  content: ThemeColor; // text ou loading
}
// Mapeando de uma interface para outra
export const buttonPresets: Record<ButtonsPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderColor: 'primary',
      borderWidth: 1,
    },
    content: 'primary',
  },
};
