import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Box} from '../Box/box';
import {Button} from '../Button/Button';
import {Screen} from '../Screen/Screen';
import {Text} from '../Text/Text';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}
export function PermissionManager({
  permissionName,
  description,
  children,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  //https://reactnative.dev/docs/linking#opensettings
  //o linking sendo usado para direcionar o usuário para a configuração de acesso do dispositivo, quando ele tiver negado o acesso ao APP;

  //OBS: NO ANDROID NÃO ATUALIZA O APP SE FOR PERMITIDO VIA CONFIGURAÇÃO, POR ISSO A MENSAGEM INFORMANDO O USUÁRIO QUANDO FOR ANDROID
  return (
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center" color="grayBlack">
        {description}
      </Text>
      {isLoading && <ActivityIndicator color="primary" />}

      {status === 'never_ask_again' && (
        <Box>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              color="error"
              bold
              marginVertical="s16"
              textAlign="center">
              É necessário abrir e fechar o App novamente após alterar as
              configurações
            </Text>
          )}
          <Button
            title="Abrir Configurações"
            onPress={Linking.openSettings}
            mt="s16"
          />
        </Box>
      )}
      {/* {status === 'never_ask_again' && (
        <Button
          title="Abrir Configurações"
          onPress={Linking.openSettings}
          mt="s16"
        />
      )} */}
    </Screen>
  );
}
