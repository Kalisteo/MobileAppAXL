import React, {FC, useContext} from 'react';
import {Text, View} from 'react-native';

import {Props} from './props';
import {styles} from './styles';
import {CommonStyles} from 'src/styles/CommonStyles';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {MainScreensType} from 'src/types/MainStackParamList';
import {AuthContext} from 'src/context/AuthContext';

export const MainScreen: FC<Props> = props => {
  const {} = props;

  const navigation = useNavigation<MainScreensType>();

  const {setIsLogin, name, email} = useContext(AuthContext);

  const Logout = () => {
    setIsLogin(false);
  };
  return (
    <View style={CommonStyles.container}>
      <Text style={styles.heading}>Hello, {name}</Text>
      <Text style={styles.desc}>Your email: {email}</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomButton
          title="Open Google"
          onPress={() =>
            navigation.navigate('WebPage', {uri: 'https://www.google.com/'})
          }
        />
        <CustomButton
          title="Open Yandex"
          onPress={() =>
            navigation.navigate('WebPage', {uri: 'https://www.yandex.ru/'})
          }
        />
        <CustomButton
          title="Open DuckDuckGo"
          onPress={() =>
            navigation.navigate('WebPage', {uri: 'https://duckduckgo.com/'})
          }
        />
      </View>
      <View style={styles.button}>
        <CustomButton title="Logout" onPress={Logout} />
      </View>
    </View>
  );
};
