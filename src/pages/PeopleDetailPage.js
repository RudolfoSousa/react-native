import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Axios from 'axios';
import {capitalizeFirstLetter} from '../util';
import PeopleList from '../components/PeopleList';

export default class PeopleDetailPage extends React.Component {

  render() {
    const {people} = this.props.navigation.state.params;
    return (
      <View style={style.container}>
        <Text>
        <Image style={style.avatar} source={{uri: people.picture.large}}></Image>
          <Text style={style.name}>{capitalizeFirstLetter(people.name.first)}</Text>
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1,
    width: '100%'
  },
  name:{
    fontSize: 50
  }
});
