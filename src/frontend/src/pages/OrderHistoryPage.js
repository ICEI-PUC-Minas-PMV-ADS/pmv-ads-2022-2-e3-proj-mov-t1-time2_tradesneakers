import react from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BottomNavigation from '../components/BottomNavigation';

import Colors from '../config/Colors';

const OrderHistoryPage = () => {
  return (
    <View style = {styles.homePage}>
      <Header/>
      <SearchBar/>
      <Text style={{fontSize: 30}}>
        Pedidos
      </Text>
      <BottomNavigation
        currentBottomNavigationTabIndex={3}
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

export default OrderHistoryPage;