import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider, useTheme} from '@shopify/restyle';
import {Theme, theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/box';

function App(): React.JSX.Element {
  const {} = useTheme<Theme>();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{padding: 20}}>
          <Text preset="headingLarge">Diego</Text>

          <Box marginTop="s20">
            <Button disabled loading title="Primary" preset="primary" />
          </Box>
          <Box marginTop="s20">
            <Button loading title="Outline" preset="outline" />
          </Box>

          <Button title="Loafing" loading marginTop="s20" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
