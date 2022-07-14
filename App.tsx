import React from 'react';
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as D from './src/data';
import MainScreen from './src/screens/MainScreen';

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;
const iconOnPress = () => {
  console.log('hello');
};
export default function App() {
  return (
    <>
      <MainScreen />
    </>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1},
  text: {fontFamily: 'DancingScript-Regular', color: Colors.amber100},
  image: {width: avatarSize, height: avatarSize, borderRadius: avatarSize},
});
