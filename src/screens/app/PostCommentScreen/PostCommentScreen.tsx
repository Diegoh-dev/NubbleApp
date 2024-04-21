import React from 'react';

import {Box, Screen, Text} from '@components';
import { AppScreenPros } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostCommentScreen({route}:AppScreenPros<'PostCommentScreen'>) {
    // route.params.postId
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
