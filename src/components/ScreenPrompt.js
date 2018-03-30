import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BetterButton from './BetterButton';
import styles from '../Styles/Styles';

// Component to create game text screens.
// Valid props include:
//    title -- Text screen title
//    subTitle -- Text screen subtitle
//    buttonText -- Text to be displayed in button
//    next -- Next screen
//    onButtonPress -- Function to run when button is pressed
export default class ScreenPrompt extends Component {
  static navigationOptions = {
    header: null
    /* No more header config here! */
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={{ width: 'auto', height: '100%' }}
        source={{ uri: 'https://raw.githubusercontent.com/dragonman117/Mystery/master/src/Images/startScreenBG.png' }}>
        <Text style={styles.Title}>
          {"Pokemon Dance"}
        </Text>
        <Text style={styles.SubTitle}>
          {"Press start to begin"}
        </Text>
        <BetterButton
          message={"Start!"}
          value={this.props.next}
          onPressed={() => navigate('Game')}
        />
        <TouchableOpacity
          style={styles.HSButton}
          onPress={() =>navigate('HighScore')}
        >
          <Text style={styles.HSButtonText}>
            {"High Scores"}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
