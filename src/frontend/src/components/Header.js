import react, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {useUser} from '../context/UserContext';

const Header = () => {

  const {signed, name} = useUser();

  const navigation = useNavigation();
  

  function ShowSignedMessage(props) {
  if (signed) {
    return <Appbar.Content style={{marginTop: 4, marginRight: -18}} title={"Olá, " + name + "!"} titleStyle={styles.fazerLoginText} onPress={() => navigation.navigate('LoginPage')} />
  }
  else {
    return <Appbar.Content style={styles.fazerLogin} title="Fazer login" titleStyle={styles.fazerLoginText} onPress={() => navigation.navigate('LoginPage')} />
  }
}

  function ShowSignedIcon(props) {
  if (signed) {
    return <Appbar.Action icon="account-circle" size={28} color='white'onPress={() => navigation.navigate('LoginPage')} />
    } 
}

  return (
    <View style={styles.header}>
      <Appbar.Header>
        <Appbar.Action icon="folder-home" onPress={() => navigation.navigate('HomePage')} />
      <ShowSignedMessage />
      <ShowSignedIcon />
      </Appbar.Header> 
      <Text></Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  fazerLogin: {
    marginTop: 4,
    cursor: 'pointer',
  },
  fazerLoginText: {
    fontSize: 16,
    textAlign: 'right'
  }
});

export default Header;