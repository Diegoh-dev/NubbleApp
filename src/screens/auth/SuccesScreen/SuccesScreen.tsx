import React from 'react';


import { Screen, Icon, Text, Button } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccesScreen({ route, navigation }: AuthScreenProps<'SuccesScreen'>) {


  function goBackToBegin() {
    //TODO: nagefar para a tela de login
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" preset="headingLarge">{route.params.title}</Text>
      <Text mt="s16" preset="paragraphLarge">{route.params.description}</Text>

      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
