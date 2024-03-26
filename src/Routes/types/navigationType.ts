import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../AppStack';
import {RootStackParamList} from '../Routes';

// Sobresqueve a tipagem que o react navigation vai usar
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AppScreenPros<RouteName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RouteName>;

