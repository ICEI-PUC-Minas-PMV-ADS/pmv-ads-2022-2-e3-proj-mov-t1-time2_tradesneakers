import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { List, Text } from 'react-native-paper';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Colors from '../config/Colors';

const image = [
  'https://cdn.pixabay.com/photo/2012/12/21/10/07/sneakers-71623_960_720.jpg',
  'https://cdn.pixabay.com/photo/2019/01/26/22/48/nike-3957127_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/07/15/18/27/sneakers-5408646_960_720.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGTH = Dimensions.get('window').height;

const DATA = [
  {
    id: 1,
    nome: 'nike air jordan',
  },
  {
    id: 2,
    nome: 'nike air force',
  },
  {
    id: 3,
    nome: 'nike air max',
  },
  {
    id: 4,
    nome: 'nike air jordan 4',
  },
  {
    id: 4,
    nome: 'nike shok',
  },
   {
    id: 4,
    nome: 'yeez',
  }
];

const HomePage = () => {
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  return (
    <View style={styles.homePage}>
      <Header />
      <View style={styles.car}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.car}>
          {image.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.car}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.carDot}>
          {image.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.catalogo}>
            <Text style= {styles.catalogotext}>{item.nome}</Text>
          </View>
        )}
      />

      <BottomNavigation currentBottomNavigationTabIndex={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  car: {
    width: WIDTH,
    height: HEIGTH * 0.25,
  },
  carDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    magin: 3,
    color: 'white',
  },
  catalogo: {
    backgroundColor: '#A9A9A9',
    height: 80,
    margin: 5,
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
    ,
  },
  catalogotext: {
    fontWeight: 'bold',
    fontSize: 20
   
  }

});

export default HomePage;
