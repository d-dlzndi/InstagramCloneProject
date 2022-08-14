import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Cache from './Cache';
import Memo from './Memo';
import Fibo from './Fibo';

const {width} = Dimensions.get('window');
const numberOfComponents = 3;

export default function index() {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  contentContainerStyle: {width: width * numberOfComponents},
});
