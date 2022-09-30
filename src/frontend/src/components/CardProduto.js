import react, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Colors from '../config/Colors';

const CardProduto = (props) => {

  const produto = props.passarProduto;

  const formatarPreco = (preco) => {
    preco = preco.toFixed(2).toString();
    preco = preco.replace(".", ",");
    return preco;
  }

  return (
    <View style={styles.cardProduto}>
      <Image source={{uri: produto.imagem}} style={styles.imagemProduto} />
      <View style = {styles.precoContainer}>
        <Text style={styles.precoText}>R$ {formatarPreco(produto.preco)}</Text>
      </View>
      <Text style={styles.nomeProdutoText}>{produto.nome}</Text>
      <Text style={styles.tamanhoProdutoText}>Tamanho {produto.tamanho}</Text>
      <Text>{produto.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProduto: {
    backgroundColor: Colors.cardColor,
    width: '100%',
    height: 450,
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
  imagemProduto: {
    width: '100%', 
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10
  },
    nomeProdutoText: {
      fontSize: 20,
      fontWeight: 'bold',
  },
      tamanhoProdutoText: {
      fontSize: 14,
      fontWeight: 'bold',
  },
  precoContainer: {
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: Colors.cardBorderColor,
    paddingTop: 5
  },
  precoText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default CardProduto;