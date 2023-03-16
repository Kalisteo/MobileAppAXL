import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from 'src/screens/MainScreen/MainScreen';
import {WebPageScreen} from 'src/screens/WebPageScreen/WebPageScreen';
import {MainStackParamList} from 'src/types/MainStackParamList';

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />

      <Stack.Screen name="WebPage" component={WebPageScreen} />
    </Stack.Navigator>
  );
};
