import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles/'
import { userEdit, userSubmit, treeEdit, treeSubmit } from '../actions'

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40, textAlign: 'center', margin: 10,}}>
          Welcome!
        </Text>
        <TextInput
        style={{height: 40, width:300, borderColor: 'white', borderWidth: 1, }}
        onChangeText={(text)=>this.props.editUser(text)}
        value={this.props.user}
        placeholder='Your Name'/>
        <TextInput
        style={{height: 40, width:300, borderColor: 'white', borderWidth: 1, }}
        onChangeText={(text)=>this.props.editTree(text)}
        value={this.props.tree}
        placeholder='Give your tree a name'/>
        <Button
        disabled={this.props.tree?false:true}
        color='green'
        onPress={
          ()=>{
            this.props.submitUser(this.props.user)
            this.props.editUser('')
            this.props.submitTree(this.props.tree)
            this.props.editTree('')
          }
        }
        title='Start'/>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    tree: state.tree
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user) => dispatch(userEdit(user)),
    submitUser: (user) => dispatch(userSubmit(user)),
    editTree: (tree) => dispatch(treeEdit(tree)),
    submitTree: (tree) => dispatch(treeSubmit(tree)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)