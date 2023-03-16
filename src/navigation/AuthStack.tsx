import React from 'react';
import {IntroScreen} from 'src/screens/IntroScreen/IntroScreen';
import {AuthScreen} from 'src/screens/AuthScreen/AuthScreen';
import {AuthStackParamList} from 'src/types/AuthStackParamList';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />

      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};
