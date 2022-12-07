import react, {useState, useEffect} from 'react';
import {View, ScrollView ,Text, StyleSheet, Image, Alert} from 'react-native';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import {getProduto} from '../services/produtos.services';
import {insertOrder} from '../services/orders.services';
import { updateTroca } from '../services/trocas.services'

import {useUser} from '../context/UserContext';
import {getUser} from '../services/auth.services';

import Colors from '../config/Colors';
import {formatarPreco} from '../config/CommonFunctions';

const PayOfferPage = ({navigation, route}) => {

  const {userId, signed} = useUser();

  if (!signed) {
    navigation.goBack();
    navigation.navigate("LoginPage")
  }

  const { produtoId, offer, proponenteOuVendedor } = route.params? route.params : 0;

  const [user, setUser] = useState();
  const [userIsLoaded, setUserIsLoaded] = useState(false);
  const [useDefaultAddress, setUseDefaultAddress] = useState(false);
  const [produto, setProduto] = useState();
  const [produtoIsLoaded, setProdutoIsLoaded] = useState(false);

  const [checkedAddress, setCheckedAddress] = useState('second');
  const [checkedPayment, setCheckedPayment] = useState('first');

  const taxaDeCuradoria = 20;
  const [valorDaEntrega, setValorDaEntrega] = useState(5 + (Math.random() * 25));

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");

  const [numeroDoCartao, setNumeroDoCartao] = useState("");
  const [numeroDoCartaoLength, setNumeroDoCartaoLength] = useState(0);
  const [nomeCartao, setNomeCartao] = useState("");
  const [expiracao, setExpiracao] = useState("");
  const [expiracaoLength, setExpiracaoLength] = useState(0);
  const [cvv, setCvv] = useState("");

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
        if (response.publicPlace != null && response.city != null && response.state != null && response.country != null && response.postalCode != null) {
          setUseDefaultAddress(true);
          setCheckedAddress('first');
        }
        setUserIsLoaded(true);
      }
    });
  }, [userId]);

  const formatCreditCardNumber = (number) => {
    let formatedNumber = "";
    if (numeroDoCartao.length > number.length) {
      formatedNumber = number;
    }
    else {
      formatedNumber = numeroDoCartao;      
      number = number.replace(/[^0-9.]/g, '');
      for (let i = formatedNumber.replace(/[^0-9.]/g, '').length; i < number.length; i++) {
        if (i%4 == 0 && i != 0) {
          formatedNumber += ' ';
        }
        formatedNumber += number[i];
      }
    }
    setNumeroDoCartao(formatedNumber);
  }

  const formatExpiration = (expiracaoValue) => {
    if (expiracao.length < expiracaoValue.length && expiracaoValue.length > 2) {
      expiracaoValue = expiracaoValue.replace(/[^0-9.]/g, '');
      expiracaoValue = expiracaoValue.substring(0,2) + "/" + expiracaoValue.substring(2,6);
    }
    setExpiracao(expiracaoValue);
  }
  
  function getCurrentDate()
  {
    const date = new Date().toString();
    const separatedDateElements = date.split(" ");
    const formatedDate = separatedDateElements[1] + " " + separatedDateElements[2] + " " + separatedDateElements[3] + " " + separatedDateElements[4];
    return formatedDate;
  }

  const handleBuy = () => { 
    let informacoesSaoValidas = true;
      if(checkedAddress == 'second') {
        if (logradouro.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
          informacoesSaoValidas = false;  
          Alert.alert('Atenção','Inserir logradouro!');
        }
        if (cidade.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
          informacoesSaoValidas = false;  
          Alert.alert('Atenção','Inserir cidade!');
        }
        if (estado.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 2) {
          informacoesSaoValidas = false;  
          Alert.alert('Atenção','Inserir estado!');
        }
        if (pais.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
          informacoesSaoValidas = false;  
          Alert.alert('Atenção','Inserir país!');
        }
        if (estado.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
          informacoesSaoValidas = false;  
          Alert.alert('Atenção','Inserir nome do titular do cartão!');
        }
      }
      if (numeroDoCartao.replace(/\s/g, "").length != 16) {
        informacoesSaoValidas = false;  
        Alert.alert('Atenção','Número do cartão deve conter 16 digitos!');
      }
      if (cvv.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 3) {
        informacoesSaoValidas = false;  
        Alert.alert('Atenção','Código de segurança deve conter 3 dígitos!');
      }      
      if (nomeCartao.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
        informacoesSaoValidas = false;  
        Alert.alert('Atenção','Inserir nome do titular!');
      }
      if (expiracao.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 7) {
        informacoesSaoValidas = false;  
        Alert.alert('Atenção','Inserir data de expiração do cartão!');
      }
      if (informacoesSaoValidas) {
      const date = getCurrentDate();
      let endereco = "";
      if(checkedAddress == 'second') {
        endereco = logradouro + ", " + cidade + ", " + estado + ", " + pais + " CEP: " + cep;
      }
      else {
        endereco = user.publicPlace + ", " + user.city + ", " + user.state + ", " + user.country + " CEP: " + user.postalCode;
      }
      let cartao = numeroDoCartao.substring(numeroDoCartao.length - 4);
      cartao = "**** **** **** " + cartao;
          updateTroca({
            id: offer.id,
            idProdutoDesejado: offer.idProdutoDesejado,
            idProdutoOferecido: offer.idProdutoOferecido,
            idUsuario: offer.idUsuario,    
            idVendedor: offer.idVendedor,
            decisaoVendedor: offer.decisaoVendedor,
            vendedorPagou: (proponenteOuVendedor == 'vendedor' || offer.vendedorPagou)? true : false,
            proponentePagou: (proponenteOuVendedor == 'proponente' || offer.proponentePagou)? true : false,
          })
          insertOrder({
            produtoId: produtoId,
            buyerId: userId,
            cost: "(Trocado)" + formatarPreco(taxaDeCuradoria + valorDaEntrega),
            cardNumber: cartao,
            address: endereco,
            datePurchase: date,
            datePurchaseInTicks: new Date().getTime(),            
            status: "Em processamento"
          }).then();
        Alert.alert('Sucesso', 'Pagamento efetuado com sucesso!');
        navigation.navigate("HomePage");
      }
  }

  if (produtoIsLoaded && userIsLoaded) {
    return (
    <View style = {styles.buyProductPage}>
      <Header
        goBackEnabled = {true}
      />
      <ScrollView style={{width: '100%', padding: 8}}>
        <Text style={{fontSize: 18}}>
          Pagar taxa de entrega e curadoria
        </Text>
        <View style={styles.productInfoBox}>
          <View style={{flex: 1, padding: 6}}>
            <Text>{produto.nome}</Text>
          </View>
          <View style={{width: 90, height: 90, overflow: 'hidden'}}>
            <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />
          </View>
        </View>
        <View>
          <Text> Entrega para: </Text>
          {useDefaultAddress ? (         
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={ checkedAddress === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setCheckedAddress('first')}
            />
            <Text onPress={() => setCheckedAddress('first')}>{user.publicPlace}, {user.city}, {user.state}, {user.country} CEP: {user.postalCode}</Text>
          </View>
          )
          :
          (<Text></Text>)
          }
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="second"
              status={ checkedAddress === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setCheckedAddress('second')}
            />
            <Text onPress={() => setCheckedAddress('second')}>Informar endereço</Text>
          </View>
          {checkedAddress == 'second' ? (         
          <View style={{width: '95%'}}>
                <TextInput
                  style={styles.updateUsersTextInput}
                  label="Logradouro"
                  value={logradouro}
                  mode= {"outlined"}
                  left={<TextInput.Icon name="" />}
                  onChangeText={logradouro => setLogradouro(logradouro)}
                />
                <View style={{flexDirection:'row'}}>
                  <TextInput
                    style={[styles.updateUsersTextInput, {flex: 2.5, marginRight: 4}]}
                    label="Cidade"
                    value={cidade}
                    mode= {"outlined"}
                    left={<TextInput.Icon name="" />}
                    onChangeText={cidade => setCidade(cidade)}
                  />
                  <TextInput
                    style={[styles.updateUsersTextInput, {flex: 1, padding: 0, margin: 0}]}
                    label="UF"
                    maxLength={2}
                    value={estado}
                    mode= {"outlined"}
                    left={<TextInput.Icon name="" />}
                    onChangeText={estado => setEstado(estado)}
                  />
                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                  style={[styles.updateUsersTextInput, {flex: 1.25, marginRight: 4}]}
                  label="País"
                  value={pais}
                  mode= {"outlined"}
                  left={<TextInput.Icon name="" />}
                  onChangeText={pais => setPais(pais)}
                />
                <TextInput
                  style={[styles.updateUsersTextInput, {flex: 1}]}
                  label="CEP"
                  maxLength={8}
                  value={cep}
                  keyboardType="numeric"
                  mode= {"outlined"}
                  left={<TextInput.Icon name="" />}
                  onChangeText={cep => setCep(cep)}
              />
              </View>
          </View>
          )
          :
          (<Text></Text>)
          }
        </View>
        <View style={{marginTop: 10}}>
          <Text> Pagamento: </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={ checkedPayment === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setCheckedPayment('first')}
            />
            <Text onPress={() => setCheckedPayment('first')}>Cartão de crédito</Text>
          </View>
          {checkedPayment == 'first' ? (         
          <View style={{width: '95%'}}>
                <TextInput
                  style={styles.updateUsersTextInput}
                  label="Número do cartão"
                  value={numeroDoCartao}
                  keyboardType="numeric"
                  maxLength={19}
                  mode= {"outlined"}
                  left={<TextInput.Icon name="" />}
                  onChangeText={numeroDoCartao => formatCreditCardNumber(numeroDoCartao)}
                />
                <TextInput
                  style={styles.updateUsersTextInput}
                  label="Nome do titular"
                  value={nomeCartao}
                  mode= {"outlined"}
                  left={<TextInput.Icon name="" />}
                  onChangeText={nomeCartao => setNomeCartao(nomeCartao)}
                />
                <View style={{flexDirection:'row'}}>
                  <TextInput
                    style={[styles.updateUsersTextInput, {flex: 2.5, marginRight: 4}]}
                    label="Expiração"
                    value={expiracao}
                    maxLength={7}
                    keyboardType="numeric"
                    mode= {"outlined"}
                    left={<TextInput.Icon name="" />}
                    onChangeText={expiracao => formatExpiration(expiracao)}
                  />
                  <TextInput
                    style={[styles.updateUsersTextInput, {flex: 1, padding: 0, margin: 0}]}
                    label="CVV"
                    maxLength={3}
                    keyboardType="numeric"
                    value={cvv}
                    mode= {"outlined"}
                    left={<TextInput.Icon name="" />}
                    onChangeText={cvv => setCvv(cvv)}
                  />
                </View>
          </View>
          )
          :
          (<Text></Text>)
          }
        </View>
        <View style={{width: '100%', alignItems: 'flex-end', marginTop: 12, marginBottom: 24}}>
          <Text>Taxa de curadoria: R$ {formatarPreco(taxaDeCuradoria)}</Text>
          <Text>Valor da entrega: R$ {formatarPreco(valorDaEntrega)}</Text>
          <Text style={styles.valorTotal}>Valor total: R$ {formatarPreco(taxaDeCuradoria + valorDaEntrega)}</Text>
          <Button style={styles.botaoComprar} mode="contained" onPress={handleBuy}>
            <Text style={styles.botaoComprarText}>Comprar</Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
    }
    else {
      return (
        <View style = {styles.buyProductPage}>
          <Header/>
          <View style={{width: '100%', padding: 8}}>
            <Text style={{fontSize: 18}}>
              Pagar taxa de entrega e curadoria 
            </Text>
            <View style={styles.productInfoBox}>
              <Text>Carregando informações...</Text>
            </View>
          </View>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  buyProductPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
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
  valorTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    borderTopWidth: 1,
    borderColor: 'black',
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 4
  },
    updateUsersTextInput: {
    width: "100%",
    height: 32
  },
    botaoComprar: {
    width: "45%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  },
  botaoComprarText: {
    fontSize: 12,
  },
});

export default PayOfferPage;