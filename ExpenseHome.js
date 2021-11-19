import React,{useState,useEffect,useContext} from 'react';
import AmountDetails from './AmountDetails.js';
import TransactionList from './TransactionList';
import { StyleSheet, Text,TextInput,ScrollView, View,TouchableOpacity } from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import { Button } from 'react-native-elements';
import {DataContext} from './DataContext';

export default function ExpenseHome() {
  const value = useContext(DataContext);
  const [transaction, setTransaction] = value.bank;
  const addtrans=value.addtrans;

  const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const[category,setCategory]=useState('');

   
      const onSubmit = (cat) => {
      
          const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text:text,
          amount: amount,
          category: cat,
        }
        if(amount != 0 || amount != "" || text !== null)
        {
        addtrans(newTransaction,cat);
        setText('');
        setCategory('');
        setAmount();
        }
        else
    {
      alert("Check the text and amount which cannot be 0")
    }

      }
    
    

  return (
    <View style={styles.fcontainer}>    
    
    <AmountDetails/>
      <View style={styles.fin}>
      <Text>{"\n"}</Text>
      <Text style={{textAlign:'center'}}>Add New Transaction</Text>
      <View style={{backgroundColor: 'grey',height: 2,margin:10,flex:1}}></View>
      <FloatingLabelInput
            containerStyles={{
            borderWidth: 1,
            paddingHorizontal: 10,
            backgroundColor:'white',
            paddingVertical:10,
            borderColor: 'white',
            borderRadius: 19,}}        
        label={'Enter Text'}
        value={text}
        onChangeText={(value) => setText(value)}
      />
        
        {/* <Text>{"\n"}</Text> */}
      
      <FloatingLabelInput

      containerStyles={{
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor:'white',
        paddingVertical:10,
        marginTop:5,
        borderColor: 'white',
        borderRadius: 19,}}
        label={'Enter Amount'}
        value={amount}
        onChangeText={(value) => setAmount(value)}
      />
      <Text>{"\n"}</Text>
      <TouchableOpacity style={styles.loginbutton} onPress={()=> onSubmit('Income')}>      
      <Text style={styles.btnText}>Add Income</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginbutton2} onPress={()=> onSubmit('Expense')}>      
      <Text style={styles.btnText}>Add Expense</Text>
      </TouchableOpacity>
  
      <View style={{marginTop:40,flex:0}}>
      <Text style={{textAlign:'center',bottom:0,top:5}}>History</Text>
      <View style={{backgroundColor: 'grey',height: 2,margin:15,bottom:-3,flex:0}}></View>
      
      </View>
      </View>
    </View>
    
    
  )
}
const styles = StyleSheet.create({
    fcontainer: {
      // backgroundColor:"yellow",
        width:"100%",
        alignItems:"center",
        

    },
    fin:{
      marginBottom:-10,
      width:"90%", 
    
    },
    loginbutton:{
        fontWeight:'bold',
        padding:7,
        marginTop:"10%",
        marginLeft:"25%",
        borderRadius:1,
        width:"40%",
        color:"black",
        backgroundColor:"#3db60f",
        borderWidth:2,
        borderColor:"#3db60f",
        position: 'absolute',
        left:-105,
        top:170,
    },
    loginbutton2:{
        fontWeight:'bold',
        padding:7,
        marginTop:"10%",
        marginLeft:"25%",
        borderRadius:1,
        width:"40%",
        color:"white",
        backgroundColor:"#ff222f",
        borderWidth:2,
        borderColor:"#ff222f",
        position: 'absolute',
        right: -18,
        top:170,
    },
    btnText: {
      color: "white",
      fontSize: 15,
      justifyContent: "center",
      textAlign: "center",
    },
  });