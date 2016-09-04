import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})}
        autoCapitalize={'none'}
        autoCorrect={false}
        />

        <Text style={styles.label}>Password: </Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
        />
        <Button text={'Sign In'} onPress={this.onPress.bind(this)}/>
      </View>
    );
  }

  onPress() {
    this.setState({
      username: '',
      password: ''
    })
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

module.exports = Signin;
