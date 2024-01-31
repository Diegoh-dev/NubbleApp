import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider, useTheme} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/Icon/Icon';
import { Box } from './src/components/Box/box';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{padding: 20}}>

          <Text marginBottom='s8' preset="headingLarge">Olá</Text>
          <Text preset='paragraphLarge' mb='s40'>Digite seu e-mail e senha para entrar </Text>
          
          <Box mb='s20'>
          <TextInput placeholder='Digite seu e-mail' style={{borderWidth:1,height:50}}/>
          </Box>
          <Box >
          <TextInput placeholder='Digite sua senha' style={{borderWidth:1,height:50}}/>
          </Box>
          <Text mt='s10' marginBottom='s8' color='primary' preset="paragraphSmall" bold>Esqueci minha senha</Text>

          <Button mt='s48' title='Entrar'/>
          <Button preset='outline' mt='s12' title='Criar uma conta'/>

        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
