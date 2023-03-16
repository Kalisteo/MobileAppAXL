import React, {FC} from 'react';
import {View} from 'react-native';

import {Props} from './props';
import {styles} from './styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
import {MainStackParamList} from 'src/types/MainStackParamList';

export const WebPageScreen: FC<Props> = props => {
  const {} = props;

  const route = useRoute<RouteProp<MainStackParamList, 'WebPage'>>();

  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: route.params.uri}} originWhitelist={['*']} />
    </View>
  );
};
