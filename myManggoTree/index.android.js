import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './src/store/index.js'
import Welcome from './src/components/welcome'
import Tree from './src/components/tree'

const MyNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  Tree: { screen: Tree },
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
