import React from 'react';
import { Screen, Icon, Text, Button } from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@routes';

type SuccesScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccesScreen'>

export function SuccesScreen({ route, navigation }: SuccesScreenProps) {


  function goBackToBegin() {
    //TODO: nagefar para a tela de login
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" preset='headingLarge'>{route.params.title}</Text>
      <Text mt="s16" preset='paragraphLarge'>{route.params.description}</Text>

      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
