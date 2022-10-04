import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/navigations/Main';

import SearchQueryProvider from './src/context/SearchQueryContext';

import Constants from 'expo-constants';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SearchQueryProvider>
      <NavigationContainer styles={styles.container}>
        <Main/>
      </NavigationContainer>
    </SearchQueryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});