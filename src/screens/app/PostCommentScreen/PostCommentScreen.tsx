import React from 'react';

import { usePostCommentList } from '@domain';

import {Box, Screen, Text} from '@components';
import { AppScreenPros } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostCommentScreen({route}:AppScreenPros<'PostCommentScreen'>) {

    const postId = route.params.postId;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {list} = usePostCommentList(postId);
  return (
    <Screen canGoBack title="Comentários">
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
