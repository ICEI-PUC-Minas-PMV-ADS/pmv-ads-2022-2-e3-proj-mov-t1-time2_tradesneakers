import react, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Searchbar } from 'react-native-paper';

import {useSearchQuery} from '../context/SearchQueryContext';

const SearchBar = (props) => {

  useEffect(() => {
    return () => {(!props.resetSearchQuery)?setSearchQuery(""): null}
  }, [setSearchQuery, props.resetSearchQuery]);

  const navigation = useNavigation();

  const {searchQuery, setSearchQuery} = useSearchQuery();

  const onChangeSearch = query => setSearchQuery(query);

  _goToSearchPage = () => {
    navigation.navigate('SearchPage', {passarSearchQuery: searchQuery} );
  }

  return (
    <View style = {styles.searchBar}>
    <Searchbar
      placeholder="Buscar produto"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={() => _goToSearchPage()}
      onSubmitEditing={() => _goToSearchPage()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    padding: 10
  },
});

export default SearchBar;