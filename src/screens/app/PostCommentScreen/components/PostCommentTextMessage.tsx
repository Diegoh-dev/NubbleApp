import React, {useState} from 'react';
import { Keyboard } from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');

  const {createComment} = usePostCommentCreate(postId);

  function onPressSend() {
    createComment(message);
    setMessage('');
    Keyboard.dismiss();// para fechar p teclado
  }

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
