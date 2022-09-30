import react, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

  const navigation = useNavigation();
  
  const [searchQuery, setSearchQuery] = react.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const _goToHomepage = () => {

  }

  return (
    <View style={styles.header}>
      <Appbar.Header>
        <Appbar.Action icon="folder-home" onPress={() => navigation.navigate('HomePage')} />
        <Appbar.Content title="Header" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
});

export default Header;