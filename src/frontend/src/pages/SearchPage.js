import react, {useState, useEffect, useRef, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import { TextInput } from 'react-native-paper';

import Colors from '../config/Colors';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardProduto from '../components/CardProduto';

import {getProdutos} from '../services/produtos.services';

const SearchPage = ({route, navigation}) => {

  const { passarSearchQuery } = route.params? route.params : "";
  
  const flatlistRef = useRef();

  const [numeracaoDoCalcado, setNumeracaoDoCalcado] = useState();
  
  const normalizarTextoParaComparacao = (texto) => {
    return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  }

  const [produtosDataSource, setProdutosDataSource] = useState([]);
  const [produtosDataSourceLoaded, setProdutosDataSourceLoaded] = useState(false);

  useEffect(() => {
    getProdutos().then(response => {
        setProdutosDataSource(response? response : []);
        setProdutosDataSourceLoaded(true);
      }
    );
  }, []);

  // Recuperação dos dados que correspondem a pesquisa //
  let listaDeProdutosFiltradosSomentePorNome = useMemo( () => {
      const dataSource = produtosDataSource;
      const textoParaFiltragem = (passarSearchQuery != undefined)? normalizarTextoParaComparacao(passarSearchQuery) : "";
      const produtosFiltrados = dataSource.filter(produto => normalizarTextoParaComparacao(produto.nome).includes(textoParaFiltragem) || normalizarTextoParaComparacao(produto.descricao).includes(textoParaFiltragem));
    return produtosFiltrados;
  }, [passarSearchQuery, produtosDataSource]);

  // Aplicação de outros filtros nestes dados //
  let listaDeProdutos = useMemo( () => {
      if (numeracaoDoCalcado >= -1 && numeracaoDoCalcado != "") {
      produtosFiltrados = listaDeProdutosFiltradosSomentePorNome.filter(produto => produto.tamanho == numeracaoDoCalcado);
      return produtosFiltrados;
      }
      else {
        return listaDeProdutosFiltradosSomentePorNome;
      }
  }, [listaDeProdutosFiltradosSomentePorNome, numeracaoDoCalcado]);

   
  useEffect(() => {
    if (listaDeProdutos.length > 0) {
      flatlistRef.current.scrollToIndex({index: 0});
    }
  }, [listaDeProdutos]);

  const renderItem = ( {item} ) => {
    return (
      <CardProduto
      passarProduto = {item}
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
    <View style = {styles.searchPage}>
      <Header/>
      <SearchBar
      resetSearchQuery = {false}
      />
      <View style={{width: '100%', paddingLeft: 10}}>
      <View style={styles.caixaDeFiltros}>
      <Text style={{fontSize: 16}}>Filtrar por tamanho</Text>
      <TextInput
        maxLength={2}
        style={styles.inputNumber}
        value={numeracaoDoCalcado}
        onChangeText={numeracaoDoCalcado => setNumeracaoDoCalcado(numeracaoDoCalcado.replace(/[^0-9]/g, ''))}
      />
      </View>
      <Text style={{fontSize: 16}}>Resultados da pesquisa: </Text>
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
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  searchPage: {
    alignItems: 'center',
    flex: 1
  },
  produtosContainer: {
    width: '100%',
    padding: 10,
    height: '100%',
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
  caixaDeFiltros: {
    flexDirection: 'row', 
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: Colors.cardBorderColor,
    paddingBottom: 10,
    marginBottom: 5
  },
  inputNumber: {
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: Colors.cardBorderColor,
    width: 48,
    height: 24,
    marginLeft: 5
  }
});

export default SearchPage;