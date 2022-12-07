import react, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../config/Colors';
import { useNavigation } from '@react-navigation/native';
import { formatarPreco } from '../config/CommonFunctions';

import { deleteProduto } from '../services/produtos.services';

const CardProdutoRegistrado = (props) => {
  const navigation = useNavigation();
  const produto = props.passarProduto;

  const handleDeleteProduct = () => {
    Alert.alert(
      'Apagar produto',
      'Tem certeza que deseja apagar este produto?',
      [
        {
          text: 'Sim',
          onPress: () => deleteProduto(produto.id).then(Alert.alert('Aviso', 'Produto apagado com sucesso!'), props.produtoApagado()),
        },
        { text: 'Não' },
      ]
    );
  }

  function showShippingInfo() {
    if (produto.envioCodigoDeRastreamento != null && produto.envioEndereco != null) {
      return(
        <View style={{height: 30}}>
          <Text style={styles.statusProdutoText}><Text style={{fontWeight: 'bold'}}>Código de Rastreamento: </Text>{produto.envioCodigoDeRastreamento}</Text>
        </View>
      )
    }
    return <View style={{height: 30}}></View>
  }

  return (
    <View style={styles.cardProdutoRegistrado}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.precoContainer}>
            <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
            <Text style={styles.precoText}>R$ {formatarPreco(produto.preco)}</Text>
          </View>
        <View style={{alignItems: 'flex-start'}}>
          <Text style={styles.nomeProdutoText}>{produto.nome}</Text>
          <Text style={styles.tamanhoProdutoText}>Tamanho {produto.tamanho}</Text>
          <Text style={styles.descricaoProdutoTextBox}>{produto.descricao}</Text>
        </View>
      </View>
      <Text style={styles.statusProdutoText}><Text style={{fontWeight: 'bold'}}>Status: </Text>{produto.statusDeRecebimento}</Text>
      {showShippingInfo()}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('SendProductPage', {
            produtoId: produto.id,
          })}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{(produto.envioCodigoDeRastreamento == null || produto.envioCodigoDeRastreamento == "")? "Preencher dados de envio" : "Atualizar dados de envio"}</Text>
        </Button>
        <Button
          style={styles.buttonDanger}
          onPress={handleDeleteProduct}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Apagar</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardProdutoRegistrado: {
    backgroundColor: Colors.cardColor,
    width: '100%',
    height: 250,
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  imagemProduto: {
    width: 125,
    height: 100,
    resizeMode: 'contain',
  },
  nomeProdutoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusProdutoText: {
    fontSize: 14,
    marginTop: 4
  },
  tamanhoProdutoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  precoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4
  },
  precoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    margin: 4,
    marginBottom: 0,
    mode: 'contained',
  },
  buttonDanger: {
    backgroundColor: Colors.dangerColor,
    borderRadius: 20,
    margin: 4,
    marginBottom: 0,
    mode: 'contained',
  },
  descricaoProdutoTextBox: {
    height: 70,
    width: 230,
    overflow: 'hidden',
  }
});

export default CardProdutoRegistrado;