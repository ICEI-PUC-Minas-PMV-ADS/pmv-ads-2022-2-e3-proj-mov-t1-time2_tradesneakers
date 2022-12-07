import react, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {Button} from 'react-native-paper'
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import {getPropostasDeTrocaDoUsuario, updateTroca} from '../services/trocas.services'; 
import {useUser} from '../context/UserContext';

import Colors from '../config/Colors';

const ViewOffersPage = ({navigation}) => {
  
  const {userId, signed} = useUser();

  if (!signed) {
    navigation.goBack();
    navigation.navigate("LoginPage")
  }

  const flatlistRef = useRef();

  const [propostasDeTrocaDataSource, setPropostasDeTrocaDataSource] = useState([]);
  const [propostasDeTrocaDataSourceLoaded, setPropostasDeTrocaDataSourceLoaded] = useState(false);

  useEffect(() => {
    getPropostasDeTrocaDoUsuario(userId).then(response => {
        setPropostasDeTrocaDataSource(response? response : []);
        setPropostasDeTrocaDataSourceLoaded(true);
      }
    );
  }, [propostasDeTrocaDataSourceLoaded, userId]);

  function handleUpdateTroca(item, decision) {
      setPropostasDeTrocaDataSourceLoaded(false);
      updateTroca({
        id: item.id,
        idProdutoDesejado: item.idProdutoDesejado,
        idProdutoOferecido: item.idProdutoOferecido,
        idUsuario: item.idUsuario,    
        idVendedor: item.idVendedor,
        decisaoVendedor: decision,
        vendedorPagou: false,
        proponentePagou: false
      })
  }

  function renderPaymentStatus(item) {
    let vendedorPagouMensagem = "Aguardando vendedor pagar envio";
    let vendedorPagouMensagemColor = {color: 'black'};

    let proponentePagouMensagem = "Aguardando proponente pagar envio";
    let proponentePagouMensagemColor = {color: 'black'};

    if (item.vendedorPagou != null) {
      if (item.vendedorPagou == true) {
        vendedorPagouMensagem = "Vendedor pagou envio!"
        vendedorPagouMensagemColor = {color: 'green'}
      } 
    }
    if (item.proponentePagou != null) {
      if (item.proponentePagou == true) {
        proponentePagouMensagem = "Proponente pagou envio!"
        proponentePagouMensagemColor = {color: 'green'}
      } 
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={vendedorPagouMensagemColor}>{vendedorPagouMensagem}</Text>
        <Text style={proponentePagouMensagemColor}>{proponentePagouMensagem} </Text>
      </View>)
  }

  function renderOfferButton(item) {
    if (item.vendedor.id == userId) { 
      if (item.decisaoVendedor != null) {
        if (item.decisaoVendedor == "Aceitar") {
          return(
              <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 12, color: 'green'}}>Proposta aceita!</Text>
                <Button
                      style={styles.buttonEnvio}
                      onPress={() => navigation.navigate('PayOfferPage', { produtoId: item.produtoOferecido.id, offer: item, proponenteOuVendedor: 'vendedor' })}
                    >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Pagar envio</Text>
                </Button>           
                {renderPaymentStatus(item)}
              </View>
          )
        }
        if (item.decisaoVendedor == "Recusar") {
          return(
              <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 12, color: 'red'}}>Proposta recusada!</Text>
              </View>
          )
        }
      }
      else {
          return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12}}>
              <Button
                    style={styles.button}
                    onPress={() => handleUpdateTroca(item, 'Aceitar')}
                  >
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Aceitar</Text>
              </Button>
              <Button
                    style={[styles.button, {backgroundColor: Colors.dangerColor}]}
                    onPress={() => handleUpdateTroca(item, 'Recusar')}
                  >
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Recusar</Text>
              </Button>
          </View>
        )
      }
    }
    if (item.proponente.id == userId) {  
      if (item.decisaoVendedor != null) {
        if (item.decisaoVendedor == "Aceitar") {
          return(
              <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 12, color: 'green'}}>Proposta aceita!</Text>
                <Button
                      style={styles.buttonEnvio}
                      onPress={() => navigation.navigate('PayOfferPage', { produtoId: item.produtoDesejado.id, offer: item, proponenteOuVendedor: 'proponente' })}
                    >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Pagar envio</Text>
                </Button>
                {renderPaymentStatus(item)}              
              </View>
          )
        }
        if (item.decisaoVendedor == "Recusar") {
          return(
              <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 12, color: 'red'}}>Proposta recusada!</Text>
              </View>
          )
        }
      }
      return (
              <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', margin: 12}}>Aguardando resposta do vendedor</Text>
              </View>
      );
    }
  }

  function renderItem({item}) {
        if (propostasDeTrocaDataSourceLoaded) { 
        return (
          <View style={styles.propostaContainer}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Proposta de troca:</Text>
            <View style={styles.produtoContainer}>
              <Image source={{ uri: item.produtoDesejado.imagem }} style={styles.imagemProduto} />
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Produto:</Text>
                  <Text style={{paddingLeft: 4}}>{item.produtoDesejado.nome}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Vendedor:</Text>
                  <Text style={{paddingLeft: 4}}>{item.vendedor.name}</Text>
                </View>
                <Button
                  style={styles.buttonSecondary}
                  onPress={() =>
                    navigation.navigate('ProductDetailsPage', {
                      produtoId: item.produtoDesejado.id,
                    })
                  }
                >
                <Text style={{color: Colors.primaryColor, fontWeight: 'bold'}}>Mais detalhes</Text>
                </Button>
              </View>
            </View>
            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Trocar por</Text>
            </View>
            <View style={styles.produtoContainer}>
              <Image source={{ uri: item.produtoOferecido.imagem }} style={styles.imagemProduto} />
              <View style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Produto:</Text>
                  <Text style={{paddingLeft: 4}}>{item.produtoOferecido.nome}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Vendedor:</Text>
                  <Text style={{paddingLeft: 4}}>{item.proponente.name}</Text>
                </View>
                <Button
                  style={styles.buttonSecondary}
                  onPress={() =>
                    navigation.navigate('ProductDetailsPage', {
                      produtoId: item.produtoOferecido.id,
                    })
                  }
                >
                <Text style={{color: Colors.primaryColor, fontWeight: 'bold'}}>Mais detalhes</Text>
                </Button>
              </View>
            </View>
            {renderOfferButton(item)}
          </View>
        )
    }
  }

  function emptySearch() {
    if (propostasDeTrocaDataSourceLoaded) {
      return (
        <View style={styles.emptySearch}>
          <Text style={{fontSize: 16, alignSelf: 'center'}}>
            Nenhuma proposta de troca registrada.
          </Text>
        </View>
      );
    }
    else {
      return (
        <View style={styles.emptySearch}>
          <Text style={{fontSize: 16, alignSelf: 'center'}}>
            Carregando...
          </Text>
        </View>
      );
    }
  }

  return (
    <View style = {styles.viewOffersPage}>
      <Header
      goBackEnabled={true}
      />
      <Text style={{fontSize: 30}}>
        Propostas de troca
      </Text>
      <View style={styles.propostasContainer}>
        <FlatList
          ListEmptyComponent={emptySearch}
          data={propostasDeTrocaDataSource}
          ref={flatlistRef}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewOffersPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
    emptySearch: {
    backgroundColor: Colors.cardColor,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  propostasContainer: {
    width: '100%',
    padding: 10,
    height: '100%',
    flex: 1,
  },
  propostaContainer: {
    backgroundColor: Colors.headerColor,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    padding: 4,
    marginBottom: 16,
  },
  produtoContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.headerColor,
    width: '100%',
    padding: 4,
    marginBottom: 6,
    marginTop: 6
  },
  imagemProduto: {
    height: 90,
    width: 90,
    marginRight: 6,
    resizeMode: 'contain',
  },
    button: {
    width: 120,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    margin: 4,
    marginBottom: 0,
    mode: 'contained',
  },
    buttonSecondary: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 20,
    margin: 4,
    marginBottom: 0,
    mode: 'contained',
  },
  buttonEnvio: {
    width: 240,
    backgroundColor: Colors.primaryColor,
    borderRadius: 20,
    margin: 4,
    marginBottom: 12,
    mode: 'contained',
  },
});

export default ViewOffersPage;