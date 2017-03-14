/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';


const MyCustomHeading = (props) => {
  return (
    <Text style={ headingStyles.heading } { ...props }>
      { props.children }
    </Text>
  )
}

const headingStyles = StyleSheet.create({
  heading: {
    color: 'red',
  }
})



const myData = [
  { name: "Coffee 1", address: "Munich" },
  { name: "Coffee 2", address: "Tamil Nadu" },
  { name: "Coffee 3", address: "Linz" },
];

export default class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={ myData } renderRow={
          (coffeePlace) => <Text>{ coffeePlace.name }</Text>
        } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {}
});

AppRegistry.registerComponent('Playground', () => Playground);
