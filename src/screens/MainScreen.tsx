import {Alert, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Content from './Content';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native-paper';

const MainScreen = () => {
  const iconPressed = () => Alert.alert('Icon Pressed');
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <TopBar />
        <Content />
        <BottomBar />
      </SafeAreaView>
      <View style={styles.absoluteView}>
        <Icon
          name="feather-alt"
          size={30}
          color="white"
          onPress={iconPressed}
        />
      </View>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  absoluteView: {
    backgroundColor: Colors.blue500,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 100,
  },
});
