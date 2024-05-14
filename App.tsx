import React from 'react';

import {AuthCredentialsProvider, MMKVStorage, initializeStorage} from '@services';
// import { ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/Routes/Routes';
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
