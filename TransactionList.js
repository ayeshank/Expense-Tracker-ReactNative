import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {DataContext} from './DataContext';
import { ListItem, Avatar } from 'react-native-elements'

export default function TransactionList() {
    const value = useContext(DataContext);
    const [transaction, setTransaction] = value.bank;
    const [transactionn, setTransactionn] = value.bankk;
   const [bank]=value.bank;
   const [bankk]=value.bankk;
  return (
     <View style={{flex:1}}>
       <ScrollView style={{flex:1}}>
         <Text style={{textAlign:'center'}}>Income</Text>
         { bank.map((val,index)=>{
               return(
                
                 <View key={index} style={{flexDirection:'row',justifyContent:'space-between',margin:5,backgroundColor:'white',borderColor:'green',borderLeftWidth:5,padding:10}}>
              
                    <Text >{val.text}</Text>
                    <Text style={{fontWeight:'bold'}}>Rs {val.amount}</Text>
                   </View>
                  
               )})}
                        <Text style={{textAlign:'center'}}>Expenses</Text>
                { bankk.map((val,index)=>{
               return(
                
                 <View key={index} style={{flexDirection:'row',justifyContent:'space-between',margin:5,backgroundColor:'white',borderColor:'red',borderLeftWidth:5,padding:10}}>
              
                    <Text>{val.text}</Text>
                    <Text style={{fontWeight:'bold'}}>Rs {val.amount}</Text>
                   </View>
                  
               )})}
                </ScrollView>
     </View>
     
    
  )
}
