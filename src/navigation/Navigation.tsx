import React, {FC, useContext} from 'react';
import {Props} from 'src/navigation/props';
import {AuthStack} from 'src/navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from 'src/navigation/MainStack';
import {AuthContext} from 'src/context/AuthContext';

export const Navigation: FC<Props> = () => {
  const {isLogin} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLogin ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
