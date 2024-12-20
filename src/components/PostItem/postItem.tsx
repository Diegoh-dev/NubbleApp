import React from 'react';

import {Post} from '@domain';

// import {Box,ProfileUser} from '@components';

import {Box} from '../Box/box';
import {ProfileUser} from '../ProfileUser/ProfileUser';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          userName: post.author.userName,
          profileUrl: post.author.profileURL,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.favoriteCount}
      />

      <PostBottom
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
        id={post.id}
      />
    </Box>
  );
}
