import React, { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

import { Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
const [postList,setPostList] = useState<Post[]>([]);

  useEffect(()=>{
    postService.getList().then((list) => setPostList(list));
  },[]);
  return (
    <Screen>
     {postList.map((post) => (<Text>{post.text}</Text>))}
    </Screen>
  );
}
