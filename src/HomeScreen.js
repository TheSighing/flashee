import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>Hello, Chat App!</Text>
      <Button
      onPress={() => navigate('DeckList')}
      title="Deck List"
      />
      </View>
    );
  }
}

module.exports = HomeScreen;
