import react, {useState} from 'react';
import {View, Text, StyleSheet, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../components/Header';

import Colors from '../config/Colors';

import {register} from '../services/auth.services';

import {getUsers} from '../services/auth.services';

import {getEmailAlreadyUsed} from '../services/auth.services';

const RegisterPage = ({navigation}) => {


  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");

  const handleRegister = () => {
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
      register({
        name: nomeDeUsuario,
        email: email,
        phone: telefone,
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
    <View style = {styles.registerPage}>
      <Header
      goBackEnabled={true}
      />
      <View style={styles.registerPageContainer}>
      <Text style={{fontSize: 24, marginBottom: 16}}>
        Criar nova conta
      </Text>
            <TextInput
      style={styles.registerTextInput}
      label="Nome de usuário"
      value={nomeDeUsuario}
      mode= {"outlined"}
      left={<TextInput.Icon name="account" />}
      onChangeText={nomeDeUsuario => setNomeDeUsuario(nomeDeUsuario)}
    />
      <TextInput
      style={styles.registerTextInput}
      label="Email"
      value={email}
      mode= {"outlined"}
      left={<TextInput.Icon name="email" />}
      onChangeText={email => setEmail(email)}
    />
    <TextInput
      style={styles.registerTextInput}
      label="Telefone"
      keyboardType="numeric"
      value={telefone}
      mode= {"outlined"}
      left={<TextInput.Icon name="phone" />}
      onChangeText={telefone => setTelefone(telefone)}
    />
    <TextInput
      style={styles.registerTextInput}
      label="Senha"
      value={senha}
      secureTextEntry
      mode= {"outlined"}
      left={<TextInput.Icon name="key" />}
      onChangeText={senha => setSenha(senha)
      }
    />
    <TextInput
      style={styles.registerTextInput}
      label="Repetir senha"
      value={repetirSenha}
      secureTextEntry
      mode= {"outlined"}
      left={<TextInput.Icon name="key" />}
      onChangeText={repetirSenha => setRepetirSenha(repetirSenha)
      }
    />
    <Button style={styles.botaoPaginaRegistrar} mode="contained" onPress={handleRegister}>
      Confirmar
    </Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  registerPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
    registerPageContainer: {    
    alignItems: 'center',
    width: '100%',
    flex: 1,
    marginTop: '20%',
    
  },
  registerTextInput: {
    width: "95%",
  },
  botaoPaginaRegistrar: {
    width: "45%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  }
});

export default RegisterPage;