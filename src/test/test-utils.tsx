import React, {ReactNode} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {RenderOptions, render} from '@testing-library/react-native';

import {theme} from '@theme';
// REFERÊNCIA
//https://testing-library.com/docs/react-testing-library/setup/#custom-render
const AllTheProviders = ({children}: {children: ReactNode}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function customRender<T = unknown>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: AllTheProviders, ...options});
}

export * from '@testing-library/react-native';

export {customRender as render};
