import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles/'


class Over extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{alignSelf:'flex-end',fontSize: 25, color:'white', textAlign: 'center'}}>
          {`Fruits ( ${this.props.fruits} )`}
        </Text>
        <Text style={{fontSize: 25, textAlign: 'center', color:'white', margin: 10}}>
          {'You just found '}
          <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
            {this.props.loggedTree}
          </Text>
          {'!'}
        </Text>
        <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
          {'And he\'s dead.'}
        </Text>
        <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
          {'He\'s old anyway...'}
        </Text>
        <Image
        accessibilityLabel="tree"
        style={{width:300,height:300}}
        source={require('../assets/4.png')} />
        <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
          {'Game Over'}
        </Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    fruits: state.fruits,
    loggedTree: state.loggedTree,
  };
}

export default connect(mapStateToProps)(Over)