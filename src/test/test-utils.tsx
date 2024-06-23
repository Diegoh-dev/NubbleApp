import React, {ReactNode} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';

import {theme} from '@theme';
export const wrapperAllProviders = () => {
  // REFERÊNCIA
  //https://testing-library.com/docs/react-testing-library/setup/#custom-render
  // para garantir que cada teste vai criar um novo queryClient
  //dessa forma o queryClient não vai mais ser compartilhado entre diferentes testes;
  //https://tanstack.com/query/v4/docs/framework/react/guides/testing#our-first-test
  const queryClient = new QueryClient({
    logger: {
      log: console.log,
      warn: console.warn,
      // ✅ no more errors on the console for tests
      //@ts-ignore
      error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
    },
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
      mutations: {
        retry: false,
        cacheTime: Infinity,
      },
    },
  });

  return ({children}: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function customRender<T = unknown>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: wrapperAllProviders(), ...options});
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: wrapperAllProviders(),
    ...options,
  });
}

export * from '@testing-library/react-native';

export {customRender as render};

export {customRenderHook as renderHook};
