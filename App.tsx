import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingLarge' style={{color:'red',fontFamily:'Pencerio-Hairline'}}>Diego</Text>
      <Text preset='headingLarge' style={{color:'blue',fontFamily:'Satoshi-Black'}}>Costa</Text>
    </SafeAreaView>
  );
}

export default App;
