import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import * as D from './src/data';

import ClassComponent from './src/screens/ClassComponent';
import ArrowComponent from './src/screens/ArrowComponent';
import Person from './src/screens/Person';

const people = D.makeArray(100).map(D.createRandomPerson);

export default function App() {
  const children = people.map(person => (
    <Person key={person.id} person={person} />
  ));
  return (
    <SafeAreaView>
      <Button
        title="안녕해요"
        color="blue"
        onPress={() => console.log('안녕해요~')}
      />
      <Button
        title="놀라워요"
        color="red"
        onPress={() => Alert.alert('놀라워요~', '세상에나!')}
      />
      <TextInput
        placeholder="enter your name"
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEndEditing')}
      />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}
