import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider, useTheme} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{padding: 20}}>
          <Text preset="headingLarge">Diego</Text>

          <Icon name="eyeOn" color="carrotSecondary" size={25} />
          <Icon name="eyOff" color="backgroundContrast" size={50} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
