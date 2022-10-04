import react, {useState} from 'react';
import {View, Text, StyleSheet, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../components/Header';

import {login} from '../services/auth.services';

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../context/UserContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {

  const navigation = useNavigation();

  const {signed, setSigned, setName} = useUser();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  if (signed) {
    navigation.goBack();
  }

  const handleLogin = () => {
    login({
      email: email,
      password: senha
    }).then( res => {
      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
        navigation.navigate('HomePage')
      }else{
         Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }

    });
  }

  return (
    <View style = {styles.loginPage}>
      <Header/>
      <View style={styles.loginPageContainer}>
      <Text style={{fontSize: 24}}>
        Fazer login
      </Text>
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
      label="Senha"
      value={senha}
      secureTextEntry
      mode= {"outlined"}
      left={<TextInput.Icon name="key" />}
      onChangeText={senha => setSenha(senha)
      }
    />
    <Button style={styles.botaoPaginaRegistrar} mode="contained" onPress={handleLogin}>
      Login
    </Button>
    <Button style={styles.botaoPaginaRegistrar} mode="outlined" onPress={() => navigation.navigate('RegisterPage')}>
      Criar nova conta
    </Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginPage: {
    alignItems: 'center',
    flex: 1
  },
    loginPageContainer: {    
    alignItems: 'center',
    width: '100%',
    flex: 1,
    marginTop: '33%',
    
  },
  registerTextInput: {
    width: "95%",
  },
  botaoPaginaRegistrar: {
    width: '95%',
    marginTop: 8,
  }
});

export default LoginPage;