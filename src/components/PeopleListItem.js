import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {capitalizeFirstLetter} from '../util';

const PeopleListItem = props => {
  const { people, onPress } = props;
  const { title, first, last } = people.name
  const { thumbnail } = people.picture
  return (
    <TouchableOpacity onPress={() => onPress({ people }) }>
      <View style={style.line}>
        <Image style={style.avatar} source={{
          uri: thumbnail
        }} />
        <Text style={style.lineText}>
          { `${
            capitalizeFirstLetter(title)
          } ${
            capitalizeFirstLetter(first)
          } ${
            capitalizeFirstLetter(last)
          }` }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  line:{
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 4
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 5
  }
});

export default PeopleListItem;
