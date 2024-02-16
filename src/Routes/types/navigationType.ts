import {RootStackParamList} from '../Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Sobresqueve a tipagem que o react navigation vai usar
