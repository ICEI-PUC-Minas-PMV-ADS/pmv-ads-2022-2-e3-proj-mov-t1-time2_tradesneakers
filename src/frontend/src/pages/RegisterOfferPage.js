import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header';
import Colors from '../config/Colors';

import { insertTroca } from '../services/Troca.services';

import { getProdutos } from '../services/produtos.services';
import { useUser } from '../context/UserContext';
import { formatarPreco } from '../config/CommonFunctions';

const RegisterOfferPage  = ({ route, navigation }) => {
  const { produtoId } = route.params ? route.params : 0;
  const { vendedorId } = route.params ? route.params : 0;

  const [produto, setProduto] = useState([]);

  const { userId, signed } = useUser();

  if (!signed) {
    navigation.goBack();
    navigation.navigate('LoginPage');
  }

  useEffect(() => {
    getProdutos().then((dados) => {
      setProduto(dados);      
    });
  }, []);

  function handleSalvar(idProdutoOferecido) {
    insertTroca({
      idProdutoDesejado: produtoId,
      idProdutoOferecido: idProdutoOferecido,
      idUsuario: userId,    
      idVendedor: vendedorId
    }).then((res) => {
      Alert.alert('Atenção','Proposta de troca cadastrada com sucesso!');
      navigation.goBack();
    });
  };

  function renderItem({ item }) {
    if (userId == item.idUsuario)
      return (
        <TouchableOpacity onPress={() => handleSalvar(item.id)}>
          <View style={styles.trocas}>
            <View>
              <Image
                source={{ uri: item.imagem }}
                style={styles.imagemProdutotroca}
              />
              <Text style={styles.precoText}>
              R$ {formatarPreco(item.preco)}
            </Text>
            </View>
            <View style={{width: 200}}>
              <Text style={styles.trocaTitulo}>{item.nome}</Text>
              <Text style={styles.trocatamanho}>Tamanho {item.tamanho}</Text>
              <Text>{item.descricao}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }

  return (
    <View style={styles.body}>
      <Header goBackEnabled={true} />
      <Text style={{fontSize: 24, margin: 6}}>Qual produto deseja oferecer? </Text>
      <View>
        <View style={styles.produtosContainer}>
          <FlatList
            data={produto}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  trocas: {
    width: '92.5%',
    backgroundColor: Colors.cardColor,
    margin: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
  },
  trocaTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  imagemProdutotroca: {
    height: 110,
    width: 110,
    marginRight: 6,
    resizeMode: 'contain',
  },
  trocatamanho: {
    fontWeight: 'bold',
  },
  produtosContainer: {
    width: '100%',
    padding: 10,
    height: '100%',
    flex: 1,
    marginBottom: 50    
  },
    precoText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default RegisterOfferPage;