import react, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

import Header from '../components/Header';
import Colors from '../config/Colors';

import { getProduto } from '../services/produtos.services';

const ProductDetailsPage = ({ route, navigation }) => {
  const { produtoId } = route.params? route.params : 0;
  const [produto, setProduto] = useState();
  const [produtoLoaded, setProdutoLoaded] = useState(false);

  const formatarPreco = (preco) => {
    preco = preco.toFixed(2).toString();
    preco = preco.replace('.', ',');
    return preco;
  };

  const handleTrocar = () => {
    navigation.navigate('RegisterOfferPage', { produtoId: produtoId, vendedorId: produto.idUsuario  });
  };

  const handleComprar = () => {
    navigation.navigate("BuyProductPage", {produtoId: produtoId});
  };

  useEffect(() => {
    getProduto(produtoId).then((response) => {
      setProduto(response);
      if (response != null) {
        setProdutoLoaded(true);
      }
    });
  }, [produtoId]);

  if (produtoLoaded) {
    return (
      <View style={styles.detailsProduto}>
        <Header goBackEnabled={true} />
        <Text style={styles.nomeProdutoText}>{produto.nome}</Text>
        <Text style={styles.tamanhoProdutoText}>Tamanho {produto.tamanho}</Text>
        <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
        <Text style={styles.descricaoProduto}>{produto.descricao} </Text>
        <View style={styles.container}>
          <Button
            mode="contained"
            style={styles.buttonTroca}
            onPress={handleTrocar}>
            <Text style={styles.buttonTrocaTexto}>Trocar</Text>
          </Button>
          <Button
            mode="contained"
            style={styles.buttonComprar}
            onPress={handleComprar}>
            <Text style={styles.precoText}>
              R$ {formatarPreco(produto.preco)} Comprar
            </Text>
          </Button>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Header goBackEnabled={true} />
        <Text> Carregando produto... </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  detailsProduto: {
    backgroundColor: Colors.cardColor,
    width: '100%',
    height: 510,
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  imagemProduto: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nomeProdutoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tamanhoProdutoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descricaoProduto: {
    fontSize: 18,
  },
  buttonTroca: {
    marginTop: 60,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    width: '30%',
    height: 40,
    marginRight: 5,
  },

  buttonComprar: {
    marginTop: 60,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    width: '55%',
    height: 40,
    marginLeft: 5,
  },
  buttonTrocaTexto: {
    fontSize: 15,
  },
  precoText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default ProductDetailsPage;
