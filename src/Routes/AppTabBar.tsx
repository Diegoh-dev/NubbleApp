import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import { AppTabBottomTabParamList } from './AppTabNavigator';
import { mapScreenToProps } from './MapScreenToProps';
    
export function AppTabBar({state, descriptors, navigation}:BottomTabBarProps) {
  return (
    <Box flexDirection="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        console.log(route.name)

        const tabItem = mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
          key={index}
          activeOpacity={1}
          alignItems='center'
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
                <Icon name={ isFocused ? tabItem.icon.focused : tabItem.icon.unfocuses} color={isFocused ? 'primary': 'backgroundContrast'}/>
            <Text semiBold preset='paragraphCaption' color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
