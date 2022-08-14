import React, {useCallback} from 'react';
import type {FC} from 'react';
import * as D from '../data';
import {Alert, Image, Text, View} from 'react-native';
import {styles} from './Person.style';
import {Avatar, IconText} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/ko';
import {Colors} from 'react-native-paper';

export type PersonProps = {
  person: D.IPerson;
};

const Person: FC<PersonProps> = ({person}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed'), []);
  const deletePressed = useCallback(() => Alert.alert('qwer pressed'), []);
  const countIconPressed = useCallback(
    (name: string) => Alert.alert(`${name} pressed`),
    [],
  );

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text style={[styles.text]}>{person.comments}</Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={() => countIconPressed('commtent')}
            name="comment"
            size={24}
            color={Colors.blue400}
            textStyle={[styles.iconText]}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={() => countIconPressed('retweet')}
            name="retweet"
            size={24}
            color={Colors.purple500}
            textStyle={[styles.iconText]}
            text={person.counts.retweet}
          />
          <IconText
            viewStyle={[styles.touchableIcon]}
            onPress={() => countIconPressed('heart')}
            name="heart"
            size={24}
            color={Colors.red500}
            textStyle={[styles.iconText]}
            text={person.counts.heart}
          />
        </View>
      </View>
    </View>
  );
};
export default Person;
