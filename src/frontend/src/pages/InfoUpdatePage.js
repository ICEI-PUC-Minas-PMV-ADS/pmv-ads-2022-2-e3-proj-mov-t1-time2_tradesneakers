import react, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, StyleSheet, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../components/Header';

import Colors from '../config/Colors';

import {updateUsers} from '../services/auth.services';

import {useUser} from '../context/UserContext';

import {getUser} from '../services/auth.services';

import {getEmailAlreadyUsed} from '../services/auth.services';

const InfoUpdatePage = ({navigation}) => {


  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("******");
  const [repetirSenha, setRepetirSenha] = useState("******");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");

  const {userId} = useUser();

  useEffect(() => {
    getUser(userId).then(response => { setNomeDeUsuario(response.name) });
    getUser(userId).then(response => { setTelefone(response.phone) });
    getUser(userId).then(response => { setEmail(response.email) });
    getUser(userId).then(response => { setPrimeiroNome(response.firstname) });
    getUser(userId).then(response => { setSobrenome(response.lastname) });
  }, []);

  const handleupdateUsers = () =>  {
    let informacoesSaoValidas = true;
    if (nomeDeUsuario.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 1) {
      informacoesSaoValidas = false;  
      Alert.alert('Atenção','Inserir nome de usuário!');
    }
    if (telefone.replace(/^\s+|\s+$|\s+(?=\s)/g, "").length < 8) {
      informacoesSaoValidas = false;  
      Alert.alert('Atenção','Inserir telefone valido!');
    }
    if (senha != repetirSenha) {
      informacoesSaoValidas = false;  
      Alert.alert('Atenção', 'Senhas informadas não conferem!');
    }
    if (senha.length < 4) {
      informacoesSaoValidas = false;  
      Alert.alert('Atenção','A senha deve conter pelo menos 4 dígitos!');
    }
    if (!email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      informacoesSaoValidas = false;  
      Alert.alert('Atenção','Inserir um email válido!');
    }
    if (informacoesSaoValidas) {
      updateUsers({
        id:userId,
        name: nomeDeUsuario,
        email: email,
        phone: telefone,
        firstname: primeiroNome,
        lastname: sobrenome,
        password: senha
      }).then( res => {
            if(res){
              Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
                { text: "OK", onPress: () => navigation.goBack() }
              ]);
            }
            else{
              getEmailAlreadyUsed(email).then(response => {
              if (response) {
                Alert.alert('Atenção', 'Email já cadastrado!');
              }
              else {
                Alert.alert('Atenção', "Um erro ocorreu durante o cadastro!");
              }       
            }
          );     
        }
      });
    }
  }


  return (
    <View style = {styles.updateUsersPage}>
      <Header
      goBackEnabled={true}
      />
      <View style={styles.updateUsersPageContainer}>
      <Text style={{fontSize: 24, marginBottom: 16}}>
        Atualizar Informações
      </Text>
      <TextInput
      style={styles.updateUsersTextInput}
      label="Nome de usuário"
      value={nomeDeUsuario}
      mode= {"outlined"}
      left={<TextInput.Icon name="account" />}
      onChangeText={nomeDeUsuario => setNomeDeUsuario(nomeDeUsuario)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Primeiro Nome"
      value={primeiroNome}
      mode= {"outlined"}
      left={<TextInput.Icon name="account" />}
      onChangeText={primeiroNome => setPrimeiroNome(primeiroNome)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Sobrenome"
      value={sobrenome}
      mode= {"outlined"}
      left={<TextInput.Icon name="account" />}
      onChangeText={sobrenome => setSobrenome(sobrenome)}
    />
      <TextInput
      style={styles.updateUsersTextInput}
      label="Email"
      value={email}
      mode= {"outlined"}
      left={<TextInput.Icon name="email" />}
      onChangeText={email => setEmail(email)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Telefone"
      keyboardType="numeric"
      value={telefone}
      mode= {"outlined"}
      left={<TextInput.Icon name="phone" />}
      onChangeText={telefone => setTelefone(telefone)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Trocar Senha"
      value={senha}
      secureTextEntry
      mode= {"outlined"}
      left={<TextInput.Icon name="key" />}
      onChangeText={senha => setSenha(senha)
      }
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Repetir senha"
      value={repetirSenha}
      secureTextEntry
      mode= {"outlined"}
      left={<TextInput.Icon name="key" />}
      onChangeText={repetirSenha => setRepetirSenha(repetirSenha)
      }
    />
    <Button style={styles.botaoPaginaRegistrar} mode="contained" onPress={handleupdateUsers}>
      Confirmar
    </Button>

    <Text style={{fontSize: 24, marginBottom: 16}}>
      Endereço
    </Text>
    <TextInput
      style={styles.updateUsersTextInput}
      label="CEP"
      value={cep}
      mode= {"outlined"}
      left={<TextInput.Icon name="" />}
      onChangeText={cep => setCep(cep)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Logradouro"
      value={logradouro}
      mode= {"outlined"}
      left={<TextInput.Icon name="" />}
      onChangeText={logradouro => setLogradouro(logradouro)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Cidade"
      value={cidade}
      mode= {"outlined"}
      left={<TextInput.Icon name="" />}
      onChangeText={cidade => setCidade(cidade)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="Estado"
      value={estado}
      mode= {"outlined"}
      left={<TextInput.Icon name="" />}
      onChangeText={estado => setEstado(estado)}
    />
    <TextInput
      style={styles.updateUsersTextInput}
      label="País"
      value={pais}
      mode= {"outlined"}
      left={<TextInput.Icon name="" />}
      onChangeText={pais => setPais(pais)}
    />

    <Button style={styles.botaoPaginaRegistrar} mode="contained" onPress={handleupdateUsers}>
      Confirmar
    </Button>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  updateUsersPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
    updateUsersPageContainer: {    
    alignItems: 'center',
    width: '100%',
    flex: 1,
    marginTop: '20%',
    
  },
  updateUsersTextInput: {
    width: "95%",
  },
  botaoPaginaRegistrar: {
    width: "45%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  }
});

export default InfoUpdatePage;