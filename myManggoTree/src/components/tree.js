import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  View
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles/'
import { newYear, harvest } from '../actions'


class Tree extends Component {
  componentWillReceiveProps(){
    if(this.props.treeAge>=this.props.maxAge){
      this.props.navigation.navigate('Over')
    }
  }
  render() {
    if(this.props.treeAge>=17){
      return (
        <View style={styles.container}>
          <Text style={{alignSelf:'flex-end',fontSize: 25, color:'white', textAlign: 'center'}}>
            {`Fruits ( ${this.props.fruits} )`}
          </Text>
          <Text style={{fontSize: 25, textAlign: 'center', color:'white'}}>
            {'Now you can harvest '}
            <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
              {this.props.loggedTree}
            </Text>
            {'!'}
          </Text>
          <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
            {'Let celebrate his '}
            <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
              {this.props.treeAge}
            </Text>
            {'th birthday!'}
          </Text>
          <Image
          accessibilityLabel="tree"
          style={{width:300,height:300}}
          source={require('../assets/3.png')} />
          <Button
          color='green'
          onPress={
            ()=>{
              this.props.emulate(this.props.treeAge,this.props.matureAge,this.props.maxAge)
            }
          }
          title='Emulate'/>
          <Button
          disabled={false}
          color='green'
          onPress={
            ()=>{
              this.props.harvest()
            }
          }
          title='Harvest'/>
        </View>
      )
    } else if(this.props.treeAge>=15){
      return (
        <View style={styles.container}>
          <Text style={{alignSelf:'flex-end',fontSize: 25, color:'white', textAlign: 'center'}}>
            {`Fruits ( ${this.props.fruits} )`}
          </Text>
          <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
            {this.props.loggedTree}
            <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'normal'}}>
              {' getting older.'}
            </Text>
          </Text>
          <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
            {'He is now'}
            <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
              {this.props.treeAge}
            </Text>
            {' year\'s old'}
          </Text>
          <Image
          accessibilityLabel="tree"
          style={{width:300,height:300}}
          source={require('../assets/2.png')} />
          <Button
          color='green'
          onPress={
            ()=>{
              this.props.emulate(this.props.treeAge,this.props.matureAge,this.props.maxAge)
            }
          }
          title='Emulate'/>
          <Button
          disabled={true}
          color='green'
          onPress={
            ()=>{
              this.props.harvest()
            }
          }
          title='Harvest'/>
        </View>
      )
    } else if(this.props.treeAge>=5){
      return (
        <View style={styles.container}>
          <Text style={{alignSelf:'flex-end',fontSize: 25, color:'white', textAlign: 'center'}}>
            {`Fruits ( ${this.props.fruits} )`}
          </Text>
          <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
            {this.props.loggedTree}
            <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'normal'}}>
              {' has grown'}
            </Text>
          </Text>
          <Text style={{fontSize: 25, textAlign: 'center', margin: 10, color:'white'}}>
            {'He is now '}
            <Text style={{fontSize: 25, textAlign: 'center', color:'white',fontWeight:'bold'}}>
              {this.props.treeAge}
            </Text>
            {' year\'s old'}
          </Text>
          <Image
          accessibilityLabel="tree"
          style={{width:300,height:300}}
          source={require('../assets/1.png')} />
          <Button
          color='green'
          onPress={
            ()=>{
              this.props.emulate(this.props.treeAge,this.props.matureAge,this.props.maxAge)
            }
          }
          title='Emulate'/>
          <Button
          disabled={true}
          color='green'
          onPress={
            ()=>{
              this.props.harvest()
            }
          }
          title='Harvest'/>
        </View>
      )
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
        disabled={true}
        color='green'
        onPress={
          ()=>{
            this.props.harvest()
          }
        }
        title='Harvest'/>
      </View>
    )
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