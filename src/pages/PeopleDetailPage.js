import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Axios from 'axios';
import {capitalizeFirstLetter} from '../util';
import PeopleList from '../components/PeopleList';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {

  render() {
    const {people} = this.props.navigation.state.params;
    return (
      <View style={style.container}>
        <Image style={style.avatar} source={{uri: people.picture.large}}></Image>
        <Line label="Nome:" content={people.name.first} />
        <Line label="Email:" content={people.email} />
        <Line label="Cidade:" content={people.location.city} />
        <Line label="Nacionalidade:" content={people.nat} />
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
  }
});
