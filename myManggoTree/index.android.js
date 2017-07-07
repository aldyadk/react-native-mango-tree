import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Welcome from './src/components/welcome'
import store from './src/store/index.js'

const MyNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  // Groot: { screen: Groot },
  // Over: { screen: Over },
});

class myManggoTree extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('myManggoTree', () => myManggoTree);
