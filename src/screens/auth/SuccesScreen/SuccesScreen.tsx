import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes/Routes';
import { useAppTheme } from '../../../hooks/useAppTheme';

type SuccesScreenProps = NativeStackScreenProps<RootStackParamList,'SuccesScreen'>

export function SuccesScreen({route,navigation}:SuccesScreenProps) {


    function goBackToBegin(){
        //TODO: nagefar para a tela de login
        navigation.goBack();
    }
  return (
    <Screen>
      <Icon {...route.params.icon}  />
      <Text mt="s24" preset='headingLarge'>{route.params.title}</Text>
      <Text mt="s16" preset='paragraphLarge'>{route.params.description}</Text>

      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
