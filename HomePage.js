import React from 'react';
import { View } from 'react-native';
import ExpenseHome from './ExpenseHome';
import TransactionList from './TransactionList.js';
import Pdf from './Pdf.js';

export default function HomePage() {
  return (
      <View style={{flex:1}}>
   <ExpenseHome/>
   <TransactionList/>
   <Pdf/>
   </View>
  )
}
