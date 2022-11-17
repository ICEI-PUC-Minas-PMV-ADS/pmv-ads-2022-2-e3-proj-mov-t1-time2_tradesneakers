import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
  Animated,
  ImageBackground,
} from 'react-native';
import { List, Text } from 'react-native-paper';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Colors from '../config/Colors';
import CardProduto from '../components/CardProduto';
import { getProdutos } from '../services/produtos.services';

const images = Array(
  'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/main/docs/img/tenis.baner.jpg',
  'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e3-proj-mov-t1-time2_tradesneakers/main/docs/img/BANNERS-CATEGORIASCAL%C3%87ADOS.png'
);

const HomePage = ({ route }) => {
  const [imgActive, setimgActive] = useState(0);
  const [produtos, setProdutos] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const WIDTH = Dimensions.get('window').width;

 useEffect(() => {
    getProdutos().then((dados) => {
      let todosOsProdutos = dados;
      let produtosSelecionados = [];
      for (let i = 0; i < 4; i++) {
        let produtoAleatorioIndex = Math.floor(Math.random() * todosOsProdutos.length);
        produtosSelecionados.push(todosOsProdutos[produtoAleatorioIndex]);
        todosOsProdutos.splice(produtoAleatorioIndex, 1);
      }            
      setProdutos(produtosSelecionados);
    });
  }, []);

  const renderItem = ({ item }) => {
    return <CardProduto passarProduto={item} />;
  };

  return (
    <View style={styles.homePage}>
      <Header />
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ])}
            scrollEventThrottle={1}>
            {images.map((image, imageIndex) => {
              return (
                <View style={{ width: WIDTH, height: '100%' }} key={imageIndex}>
                  <ImageBackground
                    source={{ uri: image }}
                    style={styles.card}></ImageBackground>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                WIDTH * (imageIndex - 1),
                WIDTH * imageIndex,
                WIDTH * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </SafeAreaView>
      <View style={styles.catalogo}>
        <FlatList
          data={produtos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

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
  catalogo: {
    width: '100%',
    padding: 10,
    height: '100%',
    flex: 1,
    marginBottom: 50,
  },
  container: {
    alignItems: 'center',
  },
  scrollContainer: {
    height: 160,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 15,
  },

  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
  },
});

export default HomePage;
