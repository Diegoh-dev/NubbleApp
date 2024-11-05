import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useSettingsService} from '@services';
/**
 * To listen to device color schema changes (dark mode and light mode)
 */

export function useAppColorSchema() {
  const {onSystemChange} = useSettingsService();

  //quando o app abrir pegar o cor do tema do sistema
  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(preference => {
      onSystemChange(preference.colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, [onSystemChange]);
}
