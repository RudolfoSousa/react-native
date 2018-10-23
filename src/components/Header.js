import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
  <View style={style.header}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: 'blue',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20
  }
});

export default Header;
