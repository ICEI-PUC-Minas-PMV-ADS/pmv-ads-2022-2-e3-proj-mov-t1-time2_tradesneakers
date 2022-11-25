import react, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BottomNavigation from '../components/BottomNavigation';
import {getOrders} from '../services/orders.services'; 
import {useUser} from '../context/UserContext';

import Colors from '../config/Colors';

const OrderHistoryPage = ({navigation}) => {
  
  const {userId, signed} = useUser();

  if (!signed) {
    navigation.goBack();
    navigation.navigate("LoginPage")
  }

  const flatlistRef = useRef();

  const [historicoDePedidosDataSource, setHistoricoDePedidosDataSource] = useState([]);
  const [historicoDePedidosDataSourceLoaded, setHistoricoDePedidosDataSourceLoaded] = useState(false);

  useEffect(() => {
    getOrders(userId).then(response => {
        setHistoricoDePedidosDataSource(response? response : []);
        setHistoricoDePedidosDataSourceLoaded(true);
      }
    );
  }, []);

  function renderItem({item}) {
    if (historicoDePedidosDataSourceLoaded) {
      return (
        <View style={styles.pedidoContainer}>
          <Image source={{ uri: item.produto.imagem }} style={styles.imagemProduto} />
          <View style={{flex: 1}}>
            <Text style={{textAlign: 'right', fontWeight: 'bold', fontSize: 12}}>{item.datePurchase}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Produto:</Text>
              <Text style={{paddingLeft: 4}}>{item.produto.nome}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Valor:</Text>
              <Text style={{paddingLeft: 4}}>{item.cost} R$</Text>          
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Entrega:</Text>
              <Text style={{paddingLeft: 4}}>{item.address}</Text>          
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>Status:</Text>
              <Text style={{paddingLeft: 4}}>{item.status}</Text>          
            </View>
          </View>
        </View>
      )
    }
  }

  function emptySearch() {
    if (historicoDePedidosDataSourceLoaded) {
      return (
        <View style={styles.emptySearch}>
          <Text style={{fontSize: 16, alignSelf: 'center'}}>
            Nenhum pedido registrado.
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
    <View style = {styles.orderHistoryPage}>
      <Header/>
      <Text style={{fontSize: 30}}>
        Histórico de pedidos
      </Text>
      <FlatList
        style={styles.historicoContainer}
        ListEmptyComponent={emptySearch}
        data={historicoDePedidosDataSource}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <BottomNavigation
        currentBottomNavigationTabIndex={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  orderHistoryPage: {
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
  historicoContainer: {
    width: '100%',
    padding: 10,
    height: '100%',
    flex: 1,
    marginBottom: 50    
  },
  pedidoContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.cardColor,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
    borderRadius: 5,
    padding: 4,
    marginBottom: 10,
  },
  imagemProduto: {
    height: 90,
    width: 90,
    marginRight: 6,
    resizeMode: 'contain',
  },
});

export default OrderHistoryPage;