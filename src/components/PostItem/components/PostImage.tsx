import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';
type props = Pick<Post, 'imageURL'>;
export function PostImage({imageURL}: props) {
  return (
    <Image
      source={{uri: imageURL}}
      style={{
        width: Dimensions.get('screen').width,
        height: 300,
        marginHorizontal: -24,
      }}
      resizeMode="cover"
    />
  );
}
