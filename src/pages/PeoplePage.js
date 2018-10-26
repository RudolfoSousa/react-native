import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    }
  }

  componentDidMount(){
    this.setState({
      loading: true,
    });
    Axios.get('https://randomuser.me/api/?nat=br&results=15')
         .then(response => {
           const {results} = response.data;
           // const peoples = results.map(people => people.name.first);
           this.setState({
             peoples: results,
             loading: false,
           })
         })
         .catch(error => {
           this.setState({
             error: true,
             loading: false
           })
         });
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.loading ? <ActivityIndicator size="large" color="#6ca2f7" />
        : this.state.error
        ? <Text>Deu erro na conexão =(</Text>
        : <PeopleList onPress={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams)
        }} peoples={this.state.peoples} />
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
