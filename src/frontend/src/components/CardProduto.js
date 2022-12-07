import react, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Colors from '../config/Colors';
import { useNavigation } from '@react-navigation/native';
import { formatarPreco } from '../config/CommonFunctions';


const CardProduto = (props) => {
  const navigation = useNavigation();
  const produto = props.passarProduto;

  return (
    <View style={styles.cardProduto}>
      <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
      <View style={styles.precoContainer}>
        <Text style={styles.precoText}>R$ {formatarPreco(produto.preco)}</Text>
      </View>
      <Text style={styles.nomeProdutoText}>{produto.nome}</Text>
      <Text style={styles.tamanhoProdutoText}>Tamanho {produto.tamanho}</Text>
      <Text style={styles.descricaoTextBox}>{produto.descricao}</Text>
      <View style={styles.buttonContainer}>
      <Button
          style={styles.button}
          onPress={() =>
            navigation.navigate('ProductDetailsPage', {
              produtoId: produto.id,
            })
          }
        >
        <Text style={{color: 'white', fontWeight: 'bold'}}>Mais detalhes</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardProduto: {
    backgroundColor: Colors.cardColor,
    width: '100%',
    height: 470,
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    padding: 10,
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
  precoContainer: {
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: Colors.cardBorderColor,
    paddingTop: 5,
  },
  precoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    margin: 4,
    marginBottom: 0,
    mode: 'contained',
  },
  descricaoTextBox: {
    height: 65,
    overflow: 'hidden',
  }
});

export default CardProduto;