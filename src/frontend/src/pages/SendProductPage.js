import react, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Alert } from 'react-native';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import Header from '../components/Header';

import { getProduto } from '../services/produtos.services';
import { updateProduto } from '../services/produtos.services';

import { useUser } from '../context/UserContext';
import { getUser } from '../services/auth.services';

import Colors from '../config/Colors';
import { formatarPreco } from '../config/CommonFunctions';

const SendProductPage = ({ navigation, route }) => {
  const { userId, signed } = useUser();

  if (!signed) {
    navigation.goBack();
    navigation.navigate('LoginPage');
  }

  const { produtoId } = route.params ? route.params : 0;

  const [user, setUser] = useState();
  const [userIsLoaded, setUserIsLoaded] = useState(false);
  const [useDefaultAddress, setUseDefaultAddress] = useState(false);
  const [produto, setProduto] = useState();
  const [produtoIsLoaded, setProdutoIsLoaded] = useState(false);

  const [checkedAddress, setCheckedAddress] = useState('second');

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [codigoRastreamento, setCodigoRastreamento] = useState('');

  useEffect(() => {
    getProduto(produtoId).then((response) => {
      setProduto(response);
      if (response != null) {
        setProdutoIsLoaded(true);
      }
    });
  }, [produtoId]);

  useEffect(() => {
    getUser(1).then((response) => {
      setUser(response);
      if (response != null) {
        if (
          response.publicPlace != null &&
          response.city != null &&
          response.state != null &&
          response.country != null &&
          response.postalCode != null
        ) {
          setUseDefaultAddress(true);
          setCheckedAddress('first');
        }
        setUserIsLoaded(true);
      }
    });
  }, [userId]);

  function getCurrentDate() {
    const date = new Date().toString();
    const separatedDateElements = date.split(' ');
    const formatedDate =
      separatedDateElements[1] +
      ' ' +
      separatedDateElements[2] +
      ' ' +
      separatedDateElements[3] +
      ' ' +
      separatedDateElements[4];
    return formatedDate;
  }

  const handleBuy = () => {
    let informacoesSaoValidas = true;
    if (checkedAddress == 'second') {
      if (logradouro.replace(/^\s+|\s+$|\s+(?=\s)/g, '').length < 1) {
        informacoesSaoValidas = false;
        Alert.alert('Atenção', 'Inserir logradouro!');
      }
      if (cidade.replace(/^\s+|\s+$|\s+(?=\s)/g, '').length < 1) {
        informacoesSaoValidas = false;
        Alert.alert('Atenção', 'Inserir cidade!');
      }
      if (estado.replace(/^\s+|\s+$|\s+(?=\s)/g, '').length < 2) {
        informacoesSaoValidas = false;
        Alert.alert('Atenção', 'Inserir estado!');
      }
      if (pais.replace(/^\s+|\s+$|\s+(?=\s)/g, '').length < 1) {
        informacoesSaoValidas = false;
        Alert.alert('Atenção', 'Inserir país!');
      }
    }
    if (informacoesSaoValidas) {
      const date = getCurrentDate();
      let endereco = '';
      if (checkedAddress == 'second') {
        endereco =
          logradouro +
          ', ' +
          cidade +
          ', ' +
          estado +
          ', ' +
          pais +
          ' CEP: ' +
          cep;
      } else {
        endereco =
          user.publicPlace +
          ', ' +
          user.city +
          ', ' +
          user.state +
          ', ' +
          user.country +
          ' CEP: ' +
          user.postalCode;
      }
      updateProduto({
        id: produto.id,
        nome: produto.nome,
        marca: produto.marca,
        tamanho: produto.tamanho,
        imagem: produto.imagem,
        descricao: produto.descricao,
        preco: produto.preco,
        idUsuario: produto.idUsuario,
        envioEndereco: endereco,
        envioCodigoDeRastreamento: codigoRastreamento,
      }).then();
      Alert.alert('Sucesso', 'Tênis cadastro para curadoria com sucesso!');
      navigation.navigate('HomePage');
    }
  };

  if (produtoIsLoaded && userIsLoaded) {
    return (
      <View style={styles.sendProductPage}>
        <Header goBackEnabled={true} />
        <ScrollView style={{ width: '100%', padding: 8 }}>
          <Text style={styles.titulo}>Envio para Curadoria</Text>
          <Text style={{ fontSize: 18 }}>Produto selecionado</Text>
          <View style={styles.productInfoBox}>
            <View style={{ flex: 1, padding: 6 }}>
              <Text>{produto.nome}</Text>
              <Text style={{ fontWeight: 'bold' }}>
                R$ {formatarPreco(produto.preco)}
              </Text>
            </View>
            <View style={{ width: 90, height: 90, overflow: 'hidden' }}>
              <Image
                source={{ uri: produto.imagem }}
                style={styles.imagemProduto}
              />
            </View>
          </View>
          <View>
            <Text> Endereço do remetente: </Text>
            {useDefaultAddress ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="first"
                  status={checkedAddress === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckedAddress('first')}
                />
                <Text onPress={() => setCheckedAddress('first')}>
                  {user.publicPlace}, {user.city}, {user.state}, {user.country}{' '}
                  CEP: {user.postalCode}
                </Text>
              </View>
            ) : (
              <Text></Text>
            )}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="second"
                status={checkedAddress === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedAddress('second')}
              />
              <Text onPress={() => setCheckedAddress('second')}>
                Informar endereço
              </Text>
            </View>
            {checkedAddress == 'second' ? (
              <View style={{ width: '95%' }}>
                <TextInput
                  style={styles.updateUsersTextInput}
                  label="Logradouro"
                  value={logradouro}
                  mode={'outlined'}
                  left={<TextInput.Icon name="" />}
                  onChangeText={(logradouro) => setLogradouro(logradouro)}
                />
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={[
                      styles.updateUsersTextInput,
                      { flex: 2.5, marginRight: 4 },
                    ]}
                    label="Cidade"
                    value={cidade}
                    mode={'outlined'}
                    left={<TextInput.Icon name="" />}
                    onChangeText={(cidade) => setCidade(cidade)}
                  />
                  <TextInput
                    style={[
                      styles.updateUsersTextInput,
                      { flex: 1, padding: 0, margin: 0 },
                    ]}
                    label="UF"
                    maxLength={2}
                    value={estado}
                    mode={'outlined'}
                    left={<TextInput.Icon name="" />}
                    onChangeText={(estado) => setEstado(estado)}
                  />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    style={[
                      styles.updateUsersTextInput,
                      { flex: 1.25, marginRight: 4 },
                    ]}
                    label="País"
                    value={pais}
                    mode={'outlined'}
                    left={<TextInput.Icon name="" />}
                    onChangeText={(pais) => setPais(pais)}
                  />
                  <TextInput
                    style={[styles.updateUsersTextInput, { flex: 1 }]}
                    label="CEP"
                    maxLength={8}
                    value={cep}
                    keyboardType="numeric"
                    mode={'outlined'}
                    left={<TextInput.Icon name="" />}
                    onChangeText={(cep) => setCep(cep)}
                  />
                </View>
              </View>
            ) : (
              <Text></Text>
            )}
          </View>
          <View style={{ marginTop: 10 }}>
            <Text> Rastreio: </Text>

            <View style={{ width: '95%' }}>
              <TextInput
                style={styles.updateUsersTextInput}
                label="Código de Rastreamento"
                value={codigoRastreamento}
                mode={'outlined'}
                left={<TextInput.Icon name="" />}
                onChangeText={(codigoRastreamento) =>
                  setCodigoRastreamento(codigoRastreamento)
                }
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              marginTop: 12,
              marginBottom: 24,
            }}>
            <Button
              style={styles.botaoComprar}
              mode="contained"
              onPress={handleBuy}>
              <Text style={styles.botaoComprarText}>Confirmar</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.sendProductPage}>
        <Header />
        <View style={{ width: '100%', padding: 8 }}>
          <Text style={{ fontSize: 18 }}>Produto selecionado</Text>
          <View style={styles.productInfoBox}>
            <Text>Carregando informações...</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  sendProductPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  imagemProduto: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
  productInfoBox: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
  },
  updateUsersTextInput: {
    width: '100%',
    height: 32,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
  },
  botaoComprar: {
    width: '45%',
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16,
  },
  botaoComprarText: {
    fontSize: 12,
  },
});

export default SendProductPage;
