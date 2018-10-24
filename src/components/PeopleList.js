import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {

  const { peoples, onPress } = props;

  const textElements = peoples.map((people, i) => {
    return (
      <PeopleListItem key={i} people={people} onPress={onPress} />
    );
  })

  return (
    <View style={style.container}>
      {textElements}
    </View>
  );

}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9FF',
  }
});

export default PeopleList;
