import React,{useState,useEffect,useContext} from 'react';
import { StyleSheet, Text,TextInput,ScrollView, View,Button,TouchableOpacity } from 'react-native';
import {DataContext} from './DataContext';

export default function AmountDetails() {
  const value = useContext(DataContext);
  const [transaction, setTransaction] = value.bank;
  const [transactionn, setTransactionn] = value.bankk;
 const [bank]=value.bank;
 const [total, setTotal] = useState(0)
 const [inctotal, setincTotal] = useState(0)
 const [exptotal, setexpTotal] = useState(0)

 const getTotal = () => {
  const res = transaction.reduce((prev, item) => {
  if(item.category === "Income")
  {
    setincTotal(parseInt(prev) + parseInt(item.amount));
    return parseInt(prev) + parseInt(item.amount)
  }
  },0)
}

 const getTotall = () => {
  const ress = transactionn.reduce((prev, item) => {
     if(item.category === "Expense")
    {
      setexpTotal(-parseInt(prev) - parseInt(item.amount));
      return parseInt(prev) + parseInt(item.amount)
    }
    },0)    
}
 useEffect(() =>{

getTotal()
getTotall()

},[transaction,transactionn])
return (
   <View>
      
       {/* <ScrollView horizontal={false} style={{height:10,marginTop:10,color:'white'}}> */}
        <View style={{width:340,marginTop:90,padding:10,backgroundColor:'white'}}><Text style={{color:'black'}}>Your Balance{"\n"}PKR {parseInt(inctotal)+parseInt(exptotal)}</Text></View>
        {/* </ScrollView> */}
      {/* <ScrollView horizontal={true} style={{marginTop:0,bottom:0,top:0,color:'white'}}> */}
      <View style={{flexDirection:'row'}}>
        <View style={{width:170,height:55,padding:5,backgroundColor:'#3db60f'}}><Text style={{color:'white'}}>Income{"\n"}PKR {inctotal}</Text></View>
        <View style={{width:170,height:55,padding:5,backgroundColor:'#ff222f'}}><Text style={{color:'white'}}>Expense{"\n"}PKR {exptotal}</Text></View>
        </View>
        {/* </ScrollView> */}
   </View>
  )
}
