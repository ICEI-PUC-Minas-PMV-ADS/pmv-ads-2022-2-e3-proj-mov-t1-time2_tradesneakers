import react from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Colors from '../config/Colors';

const HomePage = () => {

  return (
    <View style = {styles.homePage}>
      <Header/>

      <Text style={{fontSize: 30}}>
        HomePage
      </Text>
      <BottomNavigation
        currentBottomNavigationTabIndex={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
});

export default HomePage;