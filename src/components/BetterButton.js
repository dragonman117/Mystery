import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '../Styles/Styles';

// Better button than default iOS button.
// Valid props include:
//    message -- The message to be displayed on button
//    onPressed -- Function to be run when button is pressed
//    value -- Value passed to onPressed
export default class BetterButton extends Component {
  handleClick = () => {
    this.props.onPressed(this.props.value);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.handleClick}
      >
        <Text style={styles.buttonText}>
          {this.props.message}
        </Text>
      </TouchableOpacity>
    )
  }
}