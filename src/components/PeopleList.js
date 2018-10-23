import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PeopleList = props => {

  const textElements = props.peoples.map((people, i) => {
    return (
      <View key={i} style={style.line}>
        <Text style={style.lineText}>{people.name.first}</Text>
      </View>
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
  },
  line:{
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: 'center',
    flexDirection: 'row'
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  }
});

export default PeopleList;
