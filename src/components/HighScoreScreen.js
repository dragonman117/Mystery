import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HighScoreScreen extends Component<Props> {

  constructor(){
    super()
  }

  //screenPrompt

  render() {
    return (
      <View style={styles.container}>
        <Text>HI</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});