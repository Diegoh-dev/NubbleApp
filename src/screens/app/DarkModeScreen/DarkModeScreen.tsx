import React from 'react';

import { ThemePreference, useSettingsService, useThemePreference } from '@services';

import {RadioButtonSelector, Screen} from '@components';


type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

const itens: Option[] = [
  {
    label: 'Ativado',
    themePreference: 'dark',
  },
  {
    label: 'Desativado',
    themePreference: 'light',
  },
  {
    label: 'Padrão do sistemas',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
    themePreference: 'system',
  },
];

export function DarkModeScreen() {
  // const [selectedItem, setSelectedItem] = useState<Option>();

  const themePreference = useThemePreference();
  const {setThemePreference} = useSettingsService();

  const selectedItem = itens.find(item => item.themePreference === themePreference);

  function setSelectedItem(item:Option){
    setThemePreference(item.themePreference);
  }

  return (
    <Screen canGoBack title="Modo escuro">
      <RadioButtonSelector
        itens={itens}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        valueKey="label"
        labelKey="themePreference"
        descriptionKey="description"
      />
    </Screen>
  );
}
