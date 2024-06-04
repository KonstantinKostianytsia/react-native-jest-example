import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ICustomButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const CustomButton = (props: ICustomButtonProps) => {
  return (
    <TouchableOpacity {...props} onPress={props.onPress}>
      <Text testID="ButtonTitle">{props.title}</Text>
    </TouchableOpacity>
  );
};
