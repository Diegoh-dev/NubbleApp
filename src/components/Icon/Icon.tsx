import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../assets/icons/ArrowRightIcon';
import { BellIcon } from '../../assets/icons/BellIcon';
import { BellOnIcon } from '../../assets/icons/BellOnIcon';
import { BookMarkIcon } from '../../assets/icons/BookMarkIcon';
import { BookMarkFillIcon } from '../../assets/icons/BookMarkFillIcon';
import { CameraIcon } from '../../assets/icons/CameraIcon';
import { ChatIcon } from '../../assets/icons/ChatIcon';
import { ChatOnIcon } from '../../assets/icons/ChatOnIcon';
import { CheckIcon } from '../../assets/icons/CheckIcon';
import { CommentIcon } from '../../assets/icons/CommentIcon';
import { ChevronRightIcon } from '../../assets/icons/ChevronRightIcon';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { FlashOnIcon } from '../../assets/icons/FlashOnIcon';
import { FlashOffIcon } from '../../assets/icons/FlashOffIcon';
import { HeartIcon } from '../../assets/icons/HeartIcon';
import { HeartFillIcon } from '../../assets/icons/HeartFillIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { HomeFillIcon } from '../../assets/icons/HomeFillIcon';
import { MessageIcon } from '../../assets/icons/MessageIcon';
import { NewPostIcon } from '../../assets/icons/NewPostIcon';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { ProfileFillIcon } from '../../assets/icons/ProfileFillIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { SettingsIcon } from '../../assets/icons/SettingsIcon';
import { TrashIcon } from '../../assets/icons/TrashIcon';
import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon';
import { Pressable } from 'react-native';
import { MessageRoundIcon } from '../../assets/icons/MessageRoundIcon';
import {ThemeColor} from '@theme';
import {useAppTheme} from '@hooks';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconNames;
  color?: ThemeColor;
  size?: number;
  onPress?:() => void;
}

export function Icon({name, color = 'backgroundContrast', size = 20,onPress}: IconProps) {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

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
  checkRound:CheckRoundIcon,
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
  MessageRound:MessageRoundIcon,
  newPost: NewPostIcon,
  profile: ProfileIcon,
  profileFill: ProfileFillIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

type IconsType = typeof iconRegistry;

type IconNames = keyof IconsType;
