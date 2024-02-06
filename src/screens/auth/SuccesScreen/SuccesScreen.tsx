import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SuccesScreen() {

    function goBackToBegin(){
        //TODO: nagefar para a tela de login
    }
  return (
    <Screen>
      <Icon name="camera" />
      <Text mt="s24" preset='headingLarge'>Title</Text>
      <Text mt="s16" preset='paragraphLarge'>Descrição</Text>

      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
