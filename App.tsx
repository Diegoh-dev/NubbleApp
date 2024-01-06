import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset='headingLarge' style={{color:'red'}}>Diego</Text>
      <Text preset='headingLarge' italic style={{color:'blue'}}>Costa</Text>
    </SafeAreaView>
  );
}

export default App;
