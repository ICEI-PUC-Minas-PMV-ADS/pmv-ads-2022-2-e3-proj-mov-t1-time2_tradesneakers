import react, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-community/picker';

import {normalizarTextoParaComparacao} from '../config/CommonFunctions';
import { useUser } from '../context/UserContext';
import {useIsFocused} from '@react-navigation/native';

import Colors from '../config/Colors';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BottomNavigation from '../components/BottomNavigation';
import CardProdutoRegistrado from '../components/CardProdutoRegistrado';

import {getCurrentUserProdutos} from '../services/produtos.services';

const PostProductPage = ({route, navigation}) => {

  const {userId, signed} = useUser();

  const isFocused = useIsFocused();

  if (!signed) {
    navigation.goBack();
    navigation.navigate("LoginPage")
  }

  const { passarSearchQuery } = route.params? route.params : "";
  
  const flatlistRef = useRef();

  const [numeracaoDoCalcado, setNumeracaoDoCalcado] = useState();

  const [produtosDataSource, setProdutosDataSource] = useState([]);
  const [produtosDataSourceLoaded, setProdutosDataSourceLoaded] = useState(false);

  useEffect(() => {
    setProdutosDataSource([]);
    setProdutosDataSourceLoaded(false);
  }, [isFocused]);

  useEffect(() => {
    getCurrentUserProdutos(userId).then(response => {
        setProdutosDataSource(response? response : []);
        setProdutosDataSourceLoaded(true);
      }
    );
  }, [produtosDataSourceLoaded]);

  // Recuperação dos dados que correspondem a pesquisa //
  let listaDeProdutosFiltradosSomentePorNome = useMemo( () => {
      const dataSource = produtosDataSource;
      const textoParaFiltragem = (passarSearchQuery != undefined)? normalizarTextoParaComparacao(passarSearchQuery) : "";
      const produtosFiltrados = dataSource.filter(produto => normalizarTextoParaComparacao(produto.nome).includes(textoParaFiltragem) || normalizarTextoParaComparacao(produto.descricao).includes(textoParaFiltragem));
    return produtosFiltrados;
  }, [passarSearchQuery, produtosDataSource]);

  // Aplicação de outros filtros nestes dados //
  let listaDeProdutos = useMemo( () => {
      if (numeracaoDoCalcado > -1 && numeracaoDoCalcado != "") {
      const produtosFiltrados = listaDeProdutosFiltradosSomentePorNome.filter(produto => produto.tamanho == numeracaoDoCalcado);
      return produtosFiltrados;
      }
      else {
        return listaDeProdutosFiltradosSomentePorNome;
      }
  }, [listaDeProdutosFiltradosSomentePorNome, numeracaoDoCalcado, produtosDataSource]);

   
  useEffect(() => {
    if (listaDeProdutos.length > 0) {
      flatlistRef.current.scrollToIndex({index: 0});
    }
  }, [listaDeProdutos]);

  const renderItem = ( {item} ) => {
    return (
      <CardProdutoRegistrado
      passarProduto = {item}
      produtoApagado ={() => (setProdutosDataSourceLoaded(false), setProdutosDataSource([]))}
      />
    );
  }

  const emptySearch = () => {
    if (produtosDataSourceLoaded) {
    return (
      <View style={styles.emptySearch}>
        <Text style={{fontSize: 16, alignSelf: 'center'}}>
          Nenhum produto encontrado!
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

  const returnTextWithNumberOfProducts = () => {
    let returnText = listaDeProdutos.length + " produtos encontrados!"
    if (listaDeProdutos.length == 0) {
      returnText = "";
    }
    else if (listaDeProdutos.length == 1) {
      returnText = listaDeProdutos.length + " produto encontrado!"
    }
    return returnText;
  }

  return (
    <View style = {styles.postProductPage}>
      <Header/>
      <SearchBar
      redirectTo="PostProductPage"
      resetSearchQuery = {false}
      />
      <View style={{width: '100%', paddingLeft: 10}}>
      <View style={styles.caixaDeFiltros}>
      <Text style={{fontSize: 16, marginRight: 8 }}>Filtrar por tamanho:</Text>
      <Picker 
      style={styles.inputNumber}
      selectedValue={numeracaoDoCalcado}
      onValueChange={(itemValue) =>
      setNumeracaoDoCalcado(itemValue)}>
          <Picker.Item label="---" value={-1} /> 
          <Picker.Item label="30" value={30} /> 
          <Picker.Item label="31" value={31} />
          <Picker.Item label="32" value={32} />
          <Picker.Item label="33" value={33} />
          <Picker.Item label="34" value={34} />
          <Picker.Item label="35" value={35} />
          <Picker.Item label="36" value={36} />
          <Picker.Item label="37" value={37} />
          <Picker.Item label="38" value={38} />
          <Picker.Item label="39" value={39} />
          <Picker.Item label="40" value={40} />
          <Picker.Item label="41" value={41} />
          <Picker.Item label="42" value={42} />
          <Picker.Item label="43" value={43} />
          <Picker.Item label="44" value={44} />
          <Picker.Item label="45" value={45} />
          <Picker.Item label="46" value={46} />
          <Picker.Item label="47" value={47} />
          <Picker.Item label="48" value={48} />
          <Picker.Item label="49" value={49} />
          <Picker.Item label="50" value={50} />
      </Picker>
      </View>
      <Text style={{fontSize: 20}}>Produtos cadastrados por mim: </Text>
      <Text style={{fontWeight: 'bold'}}>{returnTextWithNumberOfProducts()}</Text>
      </View>
      <View style = {styles.produtosContainer}>
      <FlatList
        ListEmptyComponent={emptySearch}
        data={listaDeProdutos}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
          <View style={{alignItems: 'center', marginTop: 6 }}>
            <Button mode="outlined" style={[styles.botaoTabelaSecondary, {marginBottom: 12}]} onPress={() => navigation.navigate("ViewOffersPage")}>
                <Text style={styles.botaoTabelaSecondaryText}>Visualizar propostas de troca</Text>
            </Button>
            <Button style={[styles.botaoTabela, {marginBottom: 12}]} onPress={() => navigation.navigate("RegisterProductPage")}>
                <Text style={styles.botaoTabelaText}>Cadastrar novo produto</Text>
            </Button>
          </View>
      </View>
      <BottomNavigation
        currentBottomNavigationTabIndex={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postProductPage: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1
  },
  produtosContainer: {
    width: '100%',
    padding: 10,
    height: '100%',
    flex: 1,
    marginBottom: 50    
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
  caixaDeFiltros: {
    flexDirection: 'row',
    alignItems: 'center', 
    borderBottomWidth: 1,
    borderColor: Colors.cardBorderColor,
    paddingBottom: 10,
    marginBottom: 5,
    height: 32
  },
  inputNumber: {
    flex: 0.5,
    height: 24,
    borderWidth: 1,
    borderColor: Colors.cardBorderColor,
  },
  botaoTabela: {
    width: 300,
    marginTop: 8,
    backgroundColor: Colors.primaryColor,
    borderRadius: 16
  },
  botaoTabelaText: {
    color: 'white',
    fontSize: 12,
  },
  botaoTabelaSecondary: {
    width: 300,
    marginTop: 8,
    borderColor: Colors.primaryColor,
    borderRadius: 16
  },
  botaoTabelaSecondaryText: {
    color: Colors.primaryColor,
    fontSize: 12,
  },
});

export default PostProductPage;