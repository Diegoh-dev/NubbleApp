import React from 'react';

import {Box} from '../Box/box';
import {Separator} from '../Separator/Separator';

import {RadioButtonItem} from './RadioButtonItem';

type ItemTConstraint = Record<string, any>;
export type RadioButtonSelectorProps<ItemT extends ItemTConstraint> = {
  itens: ItemT[];
  selectedItem?: ItemT;
  onSelect: (item: ItemT) => void;
  labelKey: keyof ItemT;
  descriptionKey: keyof ItemT;
  valueKey: keyof ItemT;
};

export function RadioButtonSelector<ItemT extends ItemTConstraint>({
  itens,
  selectedItem,
  onSelect,
  labelKey,
  descriptionKey,
  valueKey,
}: RadioButtonSelectorProps<ItemT>) {
  return (
    <Box>
      {itens.map((item, index) => (
        <Box key={item.label}>
          <RadioButtonItem
            label={item[labelKey]}
            description={item[descriptionKey]}
            onPress={() => onSelect(item)}
            isSelected={!!selectedItem && selectedItem[valueKey] === item[valueKey]}
          />
          {index < itens.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
}
