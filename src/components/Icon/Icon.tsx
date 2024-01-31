import React from 'react';
import {EyeOnIcon} from '../../assets/fonts/icons/EyeOnIcon';
import {ThemeColor} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import { ArrowLeftIcon } from '../../assets/fonts/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../assets/fonts/icons/ArrowRightIcon';
import { BellIcon } from '../../assets/fonts/icons/BellIcon';
import { BellOnIcon } from '../../assets/fonts/icons/BellOnIcon';
import { BookMarkIcon } from '../../assets/fonts/icons/BookMarkIcon';
import { BookMarkFillIcon } from '../../assets/fonts/icons/BookMarkFillIcon';
import { CameraIcon } from '../../assets/fonts/icons/CameraIcon';
import { ChatIcon } from '../../assets/fonts/icons/ChatIcon';
import { ChatOnIcon } from '../../assets/fonts/icons/ChatOnIcon';
import { CheckIcon } from '../../assets/fonts/icons/CheckIcon';
import { CommentIcon } from '../../assets/fonts/icons/CommentIcon';
import { ChevronRightIcon } from '../../assets/fonts/icons/ChevronRightIcon';
import { EyeOffIcon } from '../../assets/fonts/icons/EyeOffIcon';
import { FlashOnIcon } from '../../assets/fonts/icons/FlashOnIcon';
import { FlashOffIcon } from '../../assets/fonts/icons/FlashOffIcon';
import { HeartIcon } from '../../assets/fonts/icons/HeartIcon';
import { HeartFillIcon } from '../../assets/fonts/icons/HeartFillIcon';
import { HomeIcon } from '../../assets/fonts/icons/HomeIcon';
import { HomeFillIcon } from '../../assets/fonts/icons/HomeFillIcon';
import { MessageIcon } from '../../assets/fonts/icons/MessageIcon';
import { NewPostIcon } from '../../assets/fonts/icons/NewPostIcon';
import { ProfileIcon } from '../../assets/fonts/icons/ProfileIcon';
import { ProfileFillIcon } from '../../assets/fonts/icons/ProfileFillIcon';
import { SearchIcon } from '../../assets/fonts/icons/SearchIcon';
import { SettingsIcon } from '../../assets/fonts/icons/SettingsIcon';
import { TrashIcon } from '../../assets/fonts/icons/TrashIcon';

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
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  return <SVGIcon color={colors[color]} size={size} />;
}



const iconRegistry = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bell: BellIcon,
  bellOn: BellOnIcon,
  bookmark: BookMarkIcon,
  bookmarkFill: BookMarkFillIcon,
  camera: CameraIcon,
  chat: ChatIcon,
  chatOn: ChatOnIcon,
  check: CheckIcon,
  comment: CommentIcon,
  chevronRight: ChevronRightIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  flashOn: FlashOnIcon,
  flashOff: FlashOffIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  home: HomeIcon,
  homeFill: HomeFillIcon,
  message: MessageIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconsType = typeof iconRegistry;

type IconNames = keyof IconsType;
