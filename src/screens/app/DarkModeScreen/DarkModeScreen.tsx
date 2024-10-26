import React from 'react';

import {RadioButtonSelector, Screen} from '@components';

const itens = [
  {
    label: 'Ativado',
    onPress: () => {},
    isSelected: false,
  },
  {
    label: 'Desativado',
    isSelected: true,
    onPress: () => {},
  },
  {
    label: 'Padrão do sistemas',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
    onPress: () => {},
    isSelected: false,
  },
];

export function DarkModeScreen() {
  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector itens={itens} />
    </Screen>
  );
}
