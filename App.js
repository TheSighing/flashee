import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './src/ListView';
import HomeScreen from './src/HomeScreen';
import DeckListScreen from './src/DeckListScreen';
import { StackNavigator } from 'react-navigation';

const NavStack = StackNavigator({
  Home: { screen: HomeScreen },
  DeckList: { screen: DeckListScreen },
});

export default class App extends React.Component {
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       // <Text>Open up App.js to start working on your app!</Text>
  //       // <Text>Changes you make will automatically reload.</Text>
  //       // <Text>Shake your phone to open the developer menu.</Text>
  //       // <Text>Do a little dance on your mac ios simulator.</Text>
  //       <DynamicList></DynamicList>
  //     </View>
  //   );
  // }
  render() {
   return (
    //  <View style={styles.container}>
    //    <ListView></ListView>
    //  </View>
      // StackNavigator({
      //   Home: { screen: HomeScreen },
      // });
      <NavStack/>
   );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});
