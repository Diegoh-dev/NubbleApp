import React from 'react';
import {ScrollView, View} from 'react-native';

interface props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: props) {
  return <ScrollView keyboardShouldPersistTaps={'handled'} style={{backgroundColor,flex:1}} >{children}</ScrollView>;
}

export function ViewContainer({children, backgroundColor}: props) {
  return <View style={{backgroundColor}}>{children}</View>;
}
