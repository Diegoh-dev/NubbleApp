import { NativeStackScreenProps } from '@react-navigation/native-stack';



import { AppStackParamList } from '../AppStack';
import { AuthStackParamList } from '../AuthStack';


// Sobresqueve a tipagem que o react navigation vai usar
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenPros<RouteName extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<
AuthStackParamList,
  RouteName
>;