import {View, TouchableOpacity} from 'react-native';
import React, {ComponentProps, FC} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>;

export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>;
};

export const TouchableView: FC<TouchableViewProps> = ({
  children,
  viewStyle,
  ...touchableProps // children 외 나머지 prop을 여기에 넣는다.
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>{children}</View>
    </TouchableOpacity>
  );
};
