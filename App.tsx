import React, {useEffect} from 'react';

// NESSA FORMA DE IMPRTAÇÃO TEMOS UM BUG, POIS O JAVASCRIPT CARREGA OS ARQUIVOS DO INDEX, ANTES DE VAZER A INJEÇÃO NO (initializeStorage(MMKVStorage));
// import {AuthCredentialsProvider, MMKVStorage, initializeStorage} from '@services';
// import { ToastProvider} from '@services';

import {settingsService, useAppColor} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorSchema} from '@hooks';

import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/providers/AuthCrendentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';
import {darkTheme, theme} from './src/theme/theme';

// Injeção de dependência;
initializeStorage(MMKVStorage); // verificar se está initializeStorage está funcionando

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useAppColorSchema();
  const appColor = useAppColor();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            {/* only use toastprivider if it is context implementation zustant implementation doesn't need a provider */}
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
