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
} from 'react-native';
import {Colors} from 'react-native-paper';

export default function StyleTest() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={styles.text}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue500,
  },
  text: {
    fontSize: Platform.select({ios: 30, android: 20}),
    color: Colors.blue200,
  },
});
