import React from 'react';
import 'react-native-gesture-handler';
import {Navigation} from "src/navigation/Navigation";
import {SafeAreaView, StatusBar} from "react-native";
import {Colors} from "src/constants/variables";
import { AuthProvider } from 'src/context/AuthContext';


const App = () => {

  return (
    <AuthProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.bluePrimary}
      />
      <Navigation/>
    </AuthProvider>
  );
};


export default App;
