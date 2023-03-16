import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Main: undefined;
  WebPage: {uri: string};
};

export type MainScreensType = NativeStackNavigationProp<MainStackParamList>;
