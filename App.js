import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

export default createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return({
        title: peopleName,
        headerTitleStyle:{
          color: 'white',
          fontSize: 30,
        }
      })
    }
  }
}, {
  navigationOptions: {
    title: 'Pessoas!',
    headerTintColor: 'white',
    headerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#cecece',
      backgroundColor: '#6ca2f7'
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
      alignSelf: 'center'
    }
  }
})
