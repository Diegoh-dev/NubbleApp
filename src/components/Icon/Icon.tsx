import React from 'react';
import {EyeOnIcon} from '../../assets/fonts/icons/EyeOnIcon';
import {ThemeColor} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface props {
  name: IconNames;
  color?: ThemeColor;
  size?: number;
}

export function Icon({name, color = 'backgroundContrast', size = 20}: props) {
  const SVGIcon = iconsRegistry[name];
  const {colors} = useAppTheme();

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconsRegistry = {
  eyeOn: EyeOnIcon,
  eyOff: EyeOnIcon,
};

type IconsType = typeof iconsRegistry;

type IconNames = keyof IconsType;
