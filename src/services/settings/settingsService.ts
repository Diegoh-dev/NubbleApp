import {Appearance, ColorSchemeName} from 'react-native';

import {AppTheme, ThemePreference} from './settingsTypes';

function onThemePreference(themePreference: ThemePreference): AppTheme {
  if (themePreference === 'system') {
    const colorScheme = Appearance.getColorScheme();
    return colorScheme ? colorScheme : 'light';
  }

  return themePreference;
}

// quando mudar o thema no sistema operacional

function onSystemChange(
  color: ColorSchemeName,
  themePreference: ThemePreference,
): AppTheme | null {
  if (themePreference === 'system') {
    return color ? color : 'light';
  }

  return null;
}

export const settingsService = {onThemePreference, onSystemChange};
