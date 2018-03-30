/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Level from '../store/levels';
import { StackNavigator } from 'react-navigation';
import ScreenPrompt from './ScreenPrompt';
import GameScreen from "./GameScreen";
import HighScoreScreen from "./HighScoreScreen";

export default StackNavigator({
    Home: {
        screen: ScreenPrompt
    },
    Game: {
        screen: GameScreen
    },
    HighScore: {
        screen: HighScoreScreen
    }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
      headerStyle: {
          backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  },
});