import {View, Text, StyleSheet, Alert } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from '../components/Header';

import Colors from '../config/Colors';

import {useUser} from '../context/UserContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountOptionsPage = ({navigation}) => {



  const {setSigned, setName, setUserId} = useUser();


  const handleLogoff = async () => {
      try {
        setSigned(false);
        setName("");
        setUserId(-1);
        await AsyncStorage.removeItem('@TOKEN_KEY')
        } catch(e) {
          //remover error
        }
        navigation.navigate('HomePage')
      }

  return (
    <View style = {styles.accountOptions}>
      <Header
      goBackEnabled={true}
      />
      <View style={styles.accountOptionsContainer}>
      <Text style={{fontSize: 24, marginBottom: 16}}>
        Minha Conta
      </Text>

    <View style={styles.botoesContainer}>   
        <Button style={styles.botaoLogin} mode="contained" onPress={() => navigation.navigate('InfoUpdatePage')}>
          <Text style={styles.botaoLoginText}>Alterar Dados</Text>
        </Button>
      </View>
    <View style={styles.botoesContainer}>   
        <Button style={styles.botaoLogin} mode="contained" onPress={() => navigation.navigate('LoginHistoryPage')}>
          <Text style={styles.botaoLoginText}>Histórico de acesso</Text>
        </Button>
     </View>
    <View style={styles.botoesContainer}>   
        <Button style={styles.botaoLogOff} mode="outlined" onPress={handleLogoff}>
          <Text style={styles.botaoLogOffText}>Sair</Text>
        </Button>
      </View>      

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountOptions: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
    accountOptionsContainer: {    
    alignItems: 'center',
    width: '100%',
    flex: 1,
    marginTop: '20%',
  },

  botaoLoginText: {
    fontSize: 12,
  },

  botaoLogin: {
    width: "100%",
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  },

  botaoLogOff: {
    width: "100%",
    marginTop: 8,
    borderRadius: 16
  },

  botaoLogOffText: {
    fontSize: 12,
    color: Colors.primaryColor,
  },
});

export default AccountOptionsPage;
