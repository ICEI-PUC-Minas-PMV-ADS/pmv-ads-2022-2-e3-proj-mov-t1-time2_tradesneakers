import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import PostProductPage from '../pages/PostProductPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ChatPage from '../pages/ChatPage';
import NewChatPage from '../pages/NewChatPage';
import ViewChatPage from '../pages/ViewChatPage';
import InfoUpdatePage from '../pages/InfoUpdatePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import BuyProductPage from '../pages/BuyProductPage';
import LoginHistoryPage from '../pages/LoginHistoryPage';
import AccountOptionsPage from '../pages/AccountOptionsPage';
import RegisterOfferPage  from '../pages/RegisterOfferPage';
import SendProductPage from '../pages/SendProductPage';
import RegisterProductPage from '../pages/RegisterProductPage';


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="ProductDetailsPage"
        component={ProductDetailsPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="PostProductPage"
        component={PostProductPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="RegisterProductPage"
        component={RegisterProductPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="BuyProductPage"
        component={BuyProductPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="OrderHistoryPage"
        component={OrderHistoryPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="ChatPage"
        component={ChatPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="NewChatPage"
        component={NewChatPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="ViewChatPage"
        component={ViewChatPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="AccountOptionsPage"
        component={AccountOptionsPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="InfoUpdatePage"
        component={InfoUpdatePage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="LoginHistoryPage"
        component={LoginHistoryPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="RegisterOfferPage"
        component={RegisterOfferPage}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="SendProductPage"
        component={SendProductPage}
        options={{
          header: () => null,
        }}
        />
      </Stack.Navigator>
  );
};

export default Main;
