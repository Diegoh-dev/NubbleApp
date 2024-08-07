import {ThemeColor} from '../../theme/theme';
import {TouchableOpacityBoxPros} from '../Box/box';
import {TextProps} from '../Text/Text';

import {ButtonsPreset} from './Button';

//INTERFACE PARA VARIAÇÃO DO BOTÃO
interface ButtonUI {
  container: TouchableOpacityBoxPros; //TouchableOpacityBox
  content: {color: ThemeColor; textProps?: TextProps}; // text ou loading
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
      content: {
        color: 'primaryContrast',
      },
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {
        color: 'gray2',
      },
    },
  },
  outline: {
    default: {
      container: {
        borderColor: 'primary',
        borderWidth: 1,
      },
      content: {
        color: 'primary',
      },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: {
        color: 'gray2',
      },
    },
  },
  ghost: {
    default: {
      container: {
        backgroundColor: 'white70',
        height:40,
      },
      content: {
        color: 'grayBlack',
        textProps: {
          preset: 'paragraphSmall',
          bold: false,
        },
      },
    },
    disabled: {
      container: {
        backgroundColor: 'grayWhite',
        height:40,
      },
      content: {
        color: 'grayBlack',
      },
    },
  },
};
