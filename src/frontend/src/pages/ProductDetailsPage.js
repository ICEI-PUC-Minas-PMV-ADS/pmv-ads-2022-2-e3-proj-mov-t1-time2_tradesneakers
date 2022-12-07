import react, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../components/Header';
import Colors from '../config/Colors';

import { getProduto } from '../services/produtos.services';
import { formatarPreco } from '../config/CommonFunctions';
import { getUser } from '../services/auth.services';

const ProductDetailsPage = ({ route, navigation }) => {
  const [produto, setProduto] = useState();
  const [produtoLoaded, setProdutoLoaded] = useState(false);
  const [seller, setSeller] = useState();


  const { produtoId } = route.params ? route.params : 0;

  const handleTrocar = () => {
    navigation.navigate("RegisterOfferPage", { produtoId: produtoId, vendedorId: produto.idUsuario  });
  };

  const handleComprar = () => {
    navigation.navigate('BuyProductPage', { produtoId: produtoId });
  };

useEffect(() => {
    getProduto(produtoId).then((responseProduto) => {
      getUser(responseProduto.idUsuario).then((responseUser) => {
      setProduto(responseProduto);
      setSeller(responseUser);
      if (responseProduto != null && responseUser != null) {
        setProdutoLoaded(true);
      }
    });
    });
  }, [produtoId]);

  if (produtoLoaded) {
    return (
      <View style={styles.detailsProduto}>
        <Header goBackEnabled={true} />
        <View style={{width: '95%', paddingBottom: 12, paddingTop: 12}}>
        <Text style={styles.nomeProdutoText}>{produto.nome}</Text>
        <Text style={styles.marcaProdutoText}>Marca: {produto.marca}</Text>
        <Text style={styles.tamanhoProdutoText}>
          Tamanho: {produto.tamanho}
        </Text>
        <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
        <Text style={styles.descricaoProduto}>{produto.descricao} </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.vendedorProdutoText}>Vendedor: {seller.name}</Text>
          <Button
              mode="contained"
              style={styles.buttonEnviarMensagem}
              onPress={() => navigation.navigate("ViewChatPage", {destinataryId: seller.id})}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
                Enviar Mensagem
              </Text>
          </Button>
        </View>
        </View>
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
        <View style={styles.containerTabela}>
          <Button
            mode="contained"
            style={styles.buttonTabelaNumeracao}
            onPress={() => navigation.navigate('ShoeNumbering', {})}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Ver Tabela de Numeração
            </Text>
          </Button>
        </View>
        <View style={styles.containerMensagem}>
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
    alignItems: 'center',
    flex: 1,
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
  marcaProdutoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  vendedorProdutoText: {
    fontSize: 16,
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
  buttonTabelaNumeracao: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    margin: 4,
    marginTop: 10,
    marginBottom: 0,
  },
  containerTabela: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonEnviarMensagem: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    margin: 4,
    marginLeft: 24,
    padding: 2
  },
  containerMensagem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
