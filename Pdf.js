import React, {Component,useContext} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {DataContext} from './DataContext';

// import { Print } from 'expo-print';
import * as Print from 'expo-print';

export default function Pdf() {
  const value = useContext(DataContext);
 const [bank]=value.bank;
 const [bankk]=value.bankk;
 var incamount=0;
 var expamount=0;
 function renderTableData()
  {
    return bank.map((val,index)=>{
      const{text,amount}=val
      incamount=parseInt(amount)+parseInt(incamount);
      return(
       `<tr key=${index} style="background-color: blue;">
        <td  >${text}</td>
        <td >Rs ${amount}</td>
        </tr>
        `
      )
    })
  }
  function renderTableDataa()
  {
    return bankk.map((val,index)=>{
      const{text,amount}=val
      expamount=parseInt(amount)+parseInt(expamount);
      return(
       `<tr key=${index} style="background-color: blue;">
        <td >${text} </td>
        <td >Rs ${amount}</td>
        </tr>
        `
      )
    })
  }
  
  async function createPDF() {

    let filePath = await Print.printToFileAsync({
      html:  '<h1 style="text-align: center;"><strong>Welcome Guys</strong></h1><p style="text-align: center;">In This Tutorial we would learn about creating PDF File using HTML Text.</p><p style="text-align: center;"><strong>ReactNativeCode.com</strong></p>',
      width : 612,
      height : 792,
      base64 : false
    });
    var d = new Date();
    var n = d.toDateString();
    var a = new Date();
    var b = a.toLocaleTimeString();
    let promise = await Print.printAsync({
      orientation: Print.Orientation.portrait,
      html:

   `<style>
    #title
    {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    } 
    #titlea{ 
      padding-top: 8px;
      padding-bottom: 8px;
      text-align: center;
      background-color: gray;
      color: white;
      width: 100%;
    }
    #students th{
      width:100%;
    }
    #students td{
      width:100%;
      padding-top:12px;
      background-color: white;
    }
    </style>

      <body>
      <h2 style="text-align: center;"><strong>Expense Report</strong></h2>
      
      <div>
      <p style="float: left;">Dated: ${n}</p>
      <p style="float: right;">Time: ${b}</p>
      </div>
      
      <div style="background-color:white;">   
      <h1 id='title' style="color: white;">React</h1>
      <h4  style="background-color:black;color: white;text-align: center;padding:5px;">Transactions Record</h4>     
          <div style="float: left;width:49%;background-color:white;color:white;">
            <table id='students'> 
            <strong style="color:white;">,</strong>
            <tr>
              <th id='titlea'>Incomes</th>
              <th id='titlea' style="width:50%;padding-left:18px;padding-right:18px">Amount</th>
                ${renderTableData()}
            </tr>
              <tr>
                <td style="background-color:#3db60f;color: white;">Income Total</td>
                <td style="background-color:#3db60f;color: white;">Rs ${incamount}</td>
              </tr>
          </table>
          </div>
          <div style="float: right;width:49%;background-color:white;color:white;">
            <table id='students'>
            <strong style="color:white;">,</strong>
            <tr>
              <th id='titlea'>Expenses</th>
              <th id='titlea' style="width:50%;padding-left:18px;padding-right:18px">Amount</th>
              ${renderTableDataa()} 
            </tr>
              <tr>
                <td style="background-color:#ff222f;color: white;">Expense Total</td>
                <td style="background-color:#ff222f;color: white;">Rs ${expamount}</td>
              </tr>
            </table>
          </div>   
     <table style=" width:100%;margin-top:20px;">
      <th style=" width:100%;margin-top:20px;border:1px solid black;border-color: black;background-color:white;color: black;text-align: center;padding:5px;">Total Balance: Rs ${incamount-expamount}</th>
     </table>
      </div>
      </body>`
    });
    alert('PDF Generated '+ filePath.uri);
  }
    return(
      <View>
        <TouchableHighlight onPress={createPDF} style={styles.main}>
          <Text style={{textAlign:'center',fontWeight:'bold',color:'white'}}>Create PDF</Text>
        </TouchableHighlight>
      </View>
    )
  
}
const styles = StyleSheet.create({
  main : 
  { 
    marginTop : 0,
    backgroundColor:'#3db60f',
    padding:15,
   }
});

