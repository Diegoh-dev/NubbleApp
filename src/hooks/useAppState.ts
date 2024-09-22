import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

export function useAppState() {
  //para pegar o estado atual do APP
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    //adiciona um ouvinte para saber quando o estado mudou;
    const eventSubscription = AppState.addEventListener('change', state => {
      setAppState(state);
    });

    return () => {
      eventSubscription.remove();
    };
  }, []);

  return appState;
}
