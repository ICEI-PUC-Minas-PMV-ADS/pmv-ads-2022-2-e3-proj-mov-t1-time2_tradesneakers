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
  'https://scontent.fplu9-1.fna.fbcdn.net/v/t39.30808-6/305928419_445437100935973_6314165265230874171_n.png?stp=dst-png_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=UbAzPBSn_jAAX94VvQ_&_nc_ht=scontent.fplu9-1.fna&oh=00_AfAcxeNJvWLHLXg-Qxt23RFn1ih2-1PxbwIwMqf0cWnPDQ&oe=636DCDBD',
  'https://gladius.vteximg.com.br/arquivos/ids/188175/BANNERS-CATEGORIASCAL%C3%87ADOS.png?v=637572066112430000'
);

const HomePage = ({ route }) => {
  const [imgActive, setimgActive] = useState(0);
  const [produtos, setProdutos] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;
  const WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    getProdutos().then((dados) => {
      setProdutos(dados);
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
    flex: 1,
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
