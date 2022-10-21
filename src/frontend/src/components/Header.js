import react, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {useUser} from '../context/UserContext';

import Colors from '../config/Colors';

const Header = (props) => {

  const {signed, name} = useUser();

  const navigation = useNavigation();
  

  function ShowSigned(props) {
  if (signed) {
    return <Appbar.Action style={styles.loginIcon} icon="account-circle" size={28} color = {Colors.headerTextColor}  />
  }
  else {
    return <Appbar.Content style={styles.fazerLogin} title="Fazer login" titleStyle={styles.fazerLoginText} onPress={() => navigation.navigate('LoginPage')} />
  }
}
  function ShowGoBack() {
    if (props.goBackEnabled) {
      return <Appbar.Action style={{width: 24}} icon="arrow-left" size={28} color = {Colors.headerTextColor} onPress={() => navigation.goBack()} />
    }
  }

  return (
    <View style={styles.headerContainer}>
      <Appbar.Header style={styles.header}>
        <ShowGoBack/>
        <Appbar.Action style={{width: 24}} icon="message-outline" size={24} color = {Colors.headerTextColor} onPress={() => navigation.navigate('ChatPage')} />
        <Appbar.Content style={styles.headerTitle} title="Trade Sneakers" titleStyle={styles.headerTitleText} onPress={() => navigation.navigate('HomePage')} />
        <ShowSigned />
      </Appbar.Header> 
    </View>
  ); 
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
  },
  header: {
    backgroundColor: Colors.headerColor,
  },
    headerTitle: {
    alignSelf: 'center',
    cursor: 'pointer',
    position: 'absolute',
    width: 180,
    left: '50%',
    marginLeft: -90,
    marginTop: 1
  },
    headerTitleText: {
    alignSelf: 'center',
    color: Colors.headerTextColor,
    fontSize: 18,
  },
  fazerLogin: {
    marginTop: 2,
    cursor: 'pointer',
    alignSelf: 'center',
    position: 'absolute',
    width: 105,
    right: 0,
  },
  fazerLoginText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.headerTextColor,
    alignSelf: 'center',
     width: 150,
  },
  loginIcon: {
    position: 'absolute',
    width: 36,
    right: 0,
  },
});

export default Header;