import {TextProps, TextStyle} from 'react-native';

export interface ICommonLabelProps extends TextProps {
  style?: TextStyle;
  children: React.ReactNode;
}
