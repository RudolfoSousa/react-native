import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {

  const { peoples, onPress } = props;

  return (
    <FlatList data={peoples} renderItem={({ item }) => <PeopleListItem people={item} onPress={onPress} /> } keyExtractor={item => item.name.first} style={style.container} />
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9FF',
  }
});

export default PeopleList;
