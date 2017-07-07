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
    var source = ''
    if(this.props.treeAge>0){
      source = '../assets/1.png'
    } else {
      source = '../assets/0.png'
    }
    return (
      <View style={styles.container}>
        <Text style={{alignSelf:'flex-end',fontSize: 25, color:'white', textAlign: 'center'}}>
          {`Fruits ( ${this.props.fruits} )`}
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
        style={{width:300,height:300}}
        source={require('../assets/0.png')} />
        <Button
        color='green'
        onPress={
          ()=>{
            this.props.emulate(this.props.treeAge,this.props.matureAge,this.props.maxAge)
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
    matureAge: state.matureAge,
    maxAge: state.maxAge,
    fruits: state.fruits,
    healthyStatus: state.healthyStatus,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    emulate: (age1,age2,age3) => dispatch(newYear(age1,age2,age3)),
    harvest: () => dispatch(harvest()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tree)