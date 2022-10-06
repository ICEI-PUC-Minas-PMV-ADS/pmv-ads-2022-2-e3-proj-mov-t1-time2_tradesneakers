import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/navigations/Main';

import UserProvider from './src/context/UserContext';
import SearchQueryProvider from './src/context/SearchQueryContext';

import Constants from 'expo-constants';

import BottomNavigation from './src/components/BottomNavigation'

export default function App() {

  return (
    <UserProvider>
        <SearchQueryProvider>
          <NavigationContainer styles={styles.container}>
            <Main/>
          </NavigationContainer>
        </SearchQueryProvider>
    </UserProvider>
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
