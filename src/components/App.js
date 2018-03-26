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


// type Props = {};
// export default class App extends Component<Props> {
//
//   constructor(){
//     super();
//     levelGen = new Level();
//     console.log(levelGen.genLevel());
//   }
//
//   //screenPrompt
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HI</Text>
//       </View>
//     );
//   }
// }

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
        /* No more header config here! */
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default StackNavigator({
    Home: {
        screen: HomeScreen,
        title: "Home"
    },
}, {
  initialRoute: 'Home',
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