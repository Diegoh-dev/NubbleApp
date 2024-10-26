import React from 'react';

import {Box} from '../Box/box';
import { Separator } from '../Separator/Separator';

import {RadioButtonItem, RadioButtonItemProps} from './RadioButtonItem';

export function RadioButtonSelector({itens}: {itens: RadioButtonItemProps[]}) {
  return (
    <Box>
      {itens.map((item, index) => (
        <Box key={item.label}>
            <RadioButtonItem  {...item} />
            {index < itens.length - 1 && <Separator/>}
        </Box>
      ))}
    </Box>
  );
}
