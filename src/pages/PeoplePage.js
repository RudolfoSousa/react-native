import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      peoples: []
    }
  }

  componentDidMount(){
    Axios.get('https://randomuser.me/api/?nat=br&results=5')
         .then(response => {
           const {results} = response.data;
           // const peoples = results.map(people => people.name.first);
           this.setState({
             peoples: results
           })
         });
  }

  render() {
    return (
      <View>
        <PeopleList onPress={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams)
        }} peoples={this.state.peoples} />
      </View>
    );
  }
}
