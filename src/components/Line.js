import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {capitalizeFirstLetter} from '../util';

const Line = ({label = "", content = "-" }) => {
  return (
    <View style={style.line}>
      <Text style={[
        style.title,
        label.length > 8 ? style.longLabel : null
      ]}>{label}</Text>
      <Text style={style.name}>{capitalizeFirstLetter(content)}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  name:{
    fontSize: 15,
    marginLeft: 15,
    flex: 3
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1
  },
  line:{
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: "#c5c5c5",
    alignItems: "center",
    backgroundColor: "#cecece"
  },
  longLabel:{
    fontSize: 10
  }
})

export default Line;
