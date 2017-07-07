import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles/'
import { newYear } from '../actions'


class Tree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{alignSelf:'flex-end',fontSize: 25, color:'white', textAlign: 'center'}}>
          {`( ${this.props.fruits} )`}
        </Text>
        <Text style={{fontSize: 25, textAlign: 'center', color:'white'}}>
          {'This is '}
          <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
            {this.props.loggedTree}
          </Text>
        </Text>
        <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
          {'He is '}
          <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
            {this.props.treeAge}
          </Text>
          {' year\'s old'}
        </Text>
        <Image
        accessibilityLabel="tree"
        style={{width:200,height:200}}
        source={require('../assets/0.png')} />
        <Button
        color='green'
        onPress={
          ()=>{
            this.props.emulate()
          }
        }
        title='Emulate'/>
        <Button
        disabled={this.props.healthyStatus}
        color='green'
        onPress={
          ()=>{
            this.props.harvest()
          }
        }
        title='Harvest'/>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loggedTree: state.loggedTree,
    treeAge: state.treeAge,
    fruits: state.fruits,
    healthyStatus: state.healthyStatus,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    emulate: () => dispatch(newYear()),
    harvest: () => dispatch(harvest()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tree)