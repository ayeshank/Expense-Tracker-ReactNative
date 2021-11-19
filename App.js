import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';
import EventList from './EventList.js';
import MyForm from './MyForm';
import HomePage from './HomePage.js';
import ExpenseHome from './ExpenseHome';
import TransactionList from './TransactionList.js';
import { NavigationContainer } from '@react-navigation/native';
import {DataProvider} from './DataContext';

// import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
    <NavigationContainer>
      
        <Stack.Navigator initialRouteName="Expense Tracker"> 
      <Stack.Screen name="Expense Tracker" component={HomePage} options={{ title: 'Expense Tracker' }}/>  
      {/* <Stack.Screen name="Home" component={Home} options={{ title: 'Home Page' }}/> */}
      </Stack.Navigator>
      
      </NavigationContainer>
    </DataProvider>

    
  
  );
}
  {/* <View >    
      <Text>My second react app</Text>
      <StatusBar style="auto" />
      /* <EventList/> */}
    // </View>