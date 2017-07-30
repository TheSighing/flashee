import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './ListView';

class DeckListScreen extends Component {
  static navigationOptions = {
    title: 'Deck List Screen',
  };
  render() {
    // return <Text>Hello, DeckList!</Text>;
   return (
     <View style={styles.container}>
       <ListView></ListView>
     </View>
   );
  }
}

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

module.exports = DeckListScreen;
