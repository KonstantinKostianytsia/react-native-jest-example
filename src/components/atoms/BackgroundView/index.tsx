import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

import {IBackgroundViewProps} from 'types/components/atoms/BackgroundView';
import {backgroundViewStyles} from './styles';

type PropsType = PropsWithChildren<IBackgroundViewProps>;

const BackgroundView = (props: PropsType) => {
  return (
    <View style={backgroundViewStyles.mainContainer}>{props.children}</View>
  );
};

export default BackgroundView;
