import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import { ThemeProvider, useTheme } from '@shopify/restyle';
import { Theme, theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {

  const {} = useTheme<Theme>();
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView>
      <Text preset='headingLarge' style={{color:'red'}}>Diego</Text>

    <View style={{
      paddingHorizontal:16,
    }}>
    <Button title='Entrar'/>
    </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
