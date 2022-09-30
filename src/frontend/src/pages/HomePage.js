import react from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <View style = {styles.homePage}>
      <Header/>
      <SearchBar/>
      <Text style={{fontSize: 30}}>
        HomePage
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
  },
});

export default HomePage;