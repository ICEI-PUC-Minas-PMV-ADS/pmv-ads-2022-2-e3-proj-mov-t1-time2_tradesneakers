import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { List, Text } from 'react-native-paper';

import Header from '../components/Header';

import Colors from '../config/Colors';

import { getRegistrosDeLogin } from '../services/registroDeLogin.servicesDb';
import {useIsFocused} from '@react-navigation/native';

const HistoricoDeLoginPage = () => {

  const [registrosDeLogin, setRegistrosDeLogin] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getRegistrosDeLogin().then((dados)=>{
      setRegistrosDeLogin(dados);
    });
  },[isFocused]);

  const renderItem = ({ item }) => {
    return (<View key={item.id} style={{flexDirection: 'row', width: '95%', marginLeft: '2.5%', marginTop: 4}}>
      <View style={styles.boxContainer}>
        <Text>{item.usuario}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text>{item.data}</Text>
      </View>
    </View>);
  };

  return (
    <View style={styles.historicoDeLoginPage}>
      <Header />
      <Text style={{margin: 12, fontSize: 20,}}>Histórico de acesso</Text>
      <View style={{flexDirection: 'row', width: '95%', marginLeft: '2.5%', marginTop: 4}}>
      <View style={styles.boxContainerHeader}>
        <Text>Usuário</Text>
      </View>
      <View style={styles.boxContainerHeader}>
        <Text>Data de login</Text>
      </View>
    </View>
      <View style={styles.catalogo}>
        <FlatList
          style={{width: '100%'}}
          data={registrosDeLogin}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historicoDeLoginPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  catalogo: {
    flex: 1,
  },
  boxContainerHeader: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48.75%',
  },
  boxContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    padding: 6,
  }
});

export default HistoricoDeLoginPage;
