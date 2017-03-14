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
  ListView,
  TouchableOpacity
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
  { id: 1, name: "Coffee 1", address: "Munich" },
  { id: 2, name: "Coffee 2", address: "Tamil Nadu" },
  { id: 3, name: "Coffee 3", address: "Linz" },
];



const ListViewItem = (attrs) => {
  const coffeePlace = attrs.coffeePlace;

 return (
   <TouchableOpacity onPress={ () => attrs.onPress(coffeePlace.id) }>
     <View style={styles.listItem}>
       <View>
         <Text>
           { coffeePlace.name }
         </Text>
         <Text>
           { coffeePlace.address }
         </Text>
       </View>
       <Text>
         Image
       </Text>
     </View>
   </TouchableOpacity>
 )
};

const CoffeeShopDetail = (props) => {
  return (
    <View>
      <Text>
        { props.coffeePlace.name }
      </Text>

      <TouchableOpacity onPress={ props.onExit }>
        <Text>
          Exit
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default class Playground extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      currentCoffeePlace: void 0,
      dataSource: ds.cloneWithRows(myData),
    };
  }

  onCoffeePlaceClicked = (id) => {
    this.setState({ currentCoffeePlace: id })
  };

  onCoffeePlaceExit = () => {
    this.setState({ currentCoffeePlace: void 0 })
  };

  render() {
    if(this.state.currentCoffeePlace !== void 0) {
      const coffeePlace = myData.find((place) => place.id === this.state.currentCoffeePlace)

      return (<CoffeeShopDetail coffeePlace={ coffeePlace } onExit={ this.onCoffeePlaceExit } />)
    }

    return (
      <View style={styles.container}>
        <ListView dataSource={ this.state.dataSource } renderRow={ (coffeePlace) =>
          <ListViewItem coffeePlace={ coffeePlace } onPress={ this.onCoffeePlaceClicked }/> } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',

  },
  listItem: {
    alignItems: 'center',
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
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
