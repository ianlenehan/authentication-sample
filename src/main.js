import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Signin from './components/authentication/signin';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = Main;
