import React from 'react';
import {Text} from 'react-native';
import {ICommonLabelProps} from 'types/components/atoms/Labels';

export const PrimaryH1Label = (props: ICommonLabelProps) => {
  return (
    <Text style={[{fontSize: 24}, props.style]} {...props}>
      {props.children}
    </Text>
  );
};
