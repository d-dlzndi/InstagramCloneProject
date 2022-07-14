import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-paper';
import * as D from '../data/';
import Person from './Person';

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);

const Content = () => {
  return (
    <ScrollView>
      <View style={[styles.view]}>
        <FlatList
          data={people}
          renderItem={({item}) => <Person person={item} />} // children 만드는 로직
          keyExtractor={(item, idx) => item.id} // key 값 지정하는 설정
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} // 아이템 나누는 컴포넌트
        />
      </View>
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 5,
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 50},
  itemSeparator: {borderWidth: 1, borderColor: Colors.grey500},
});

/*
const avatars = D.makeArray(200).map(notUsed => D.randomAvatarUrl());

const BeforeContent = () => {
  const children = avatars.map((uri, idx) => (
    <View key={idx} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: uri}} />
    </View>
  ));
  return <View style={[styles.view]}>{children}</View>;
};
*/
