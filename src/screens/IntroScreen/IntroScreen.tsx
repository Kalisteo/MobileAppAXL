import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {Props} from './props';
import {styles} from './styles';
import {CommonStyles} from 'src/styles/CommonStyles';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {AuthScreensType} from 'src/types/AuthStackParamList';

export const IntroScreen: FC<Props> = props => {
  const {} = props;

  const navigation = useNavigation<AuthScreensType>();

  return (
    <View style={CommonStyles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.heading}>
          <Text style={styles.dedicatedHeadingPrimary}>Welcome {'\n'}</Text> to
          the test task for the company
          <Text style={styles.dedicatedHeadingSecondary}> AXL</Text>
        </Text>
      </View>
      <CustomButton title="Next" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
};
