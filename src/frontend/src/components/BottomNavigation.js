import react, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../config/Colors';

const BottomNavigation = (props) => {

  const navigation = useNavigation();

  const bottomNavigationTabIndex = props.currentBottomNavigationTabIndex;

  const handleBottomNavigationPress = (destination, newTabIndex) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.bottomNavigationContainer}>
      <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress("HomePage", 0)}>
        <Icon name="home" style={(bottomNavigationTabIndex == 0)? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
        <Text>Início</Text>
      </Pressable>
      <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress('SearchPage', 1)}>
        <Icon name="search" style={(bottomNavigationTabIndex == 1)? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
        <Text>Buscar</Text>
      </Pressable>
      <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress('PostProductPage', 2)}>
        <Icon name="plus" style={(bottomNavigationTabIndex == 2)? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
        <Text>Postar</Text>
      </Pressable>
      <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress('OrderHistoryPage', 3)}>
        <Icon name="shopping-bag" style={(bottomNavigationTabIndex == 3)? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
        <Text>Pedidos</Text>
      </Pressable>
    </View>
  ); 
}

const styles = StyleSheet.create({
  bottomNavigationContainer: {
    width: '100%',
    height: 64,
    backgroundColor: Colors.headerColor,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  navigationButton: {
    alignItems: 'center',
    margin: 6,
  },
    navigationButtonIcon: {
    alignItems: 'center',
    color: Colors.inactiveTextColor,
    margin: 6,
    marginBottom: 0,
    padding: 6,
    paddingLeft: 21,
    paddingRight: 21,
    borderRadius: 24
  },
  selectedNavigationButtonIcon: {
    alignItems: 'center',
    color: Colors.headerTextColor,
    margin: 6,
    marginBottom: 0,
    padding: 6,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: Colors.selectedTabColor,
    borderRadius: 24
  }
});

export default BottomNavigation;