import React from 'react';

// NESSA FORMA DE IMPRTAÇÃO TEMOS UM BUG, POIS O JAVASCRIPT CARREGA OS ARQUIVOS DO INDEX, ANTES DE VAZER A INJEÇÃO NO (initializeStorage(MMKVStorage));
// import {AuthCredentialsProvider, MMKVStorage, initializeStorage} from '@services';
// import { ToastProvider} from '@services';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials/providers/AuthCrendentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';
import {theme} from './src/theme/theme';

const queryClient = new QueryClient();
// Injeção de dependência;
initializeStorage(MMKVStorage);

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
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
