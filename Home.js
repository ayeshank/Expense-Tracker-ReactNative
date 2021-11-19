import React from 'react';
import {Text,View,ScrollView} from 'react-native';


export default function Home({route,navigation}) {
    const { myName, myAge } = route.params;
  return (
    <View>
      
        <Text>Hello, {myName}!</Text>
        <Text>You are {myAge} years old</Text>
        <ScrollView horizontal={false}>
        <View style={{height:200,width:200,backgroundColor:'green'}}></View>
        <View style={{height:200,width:200,backgroundColor:'red'}}></View>
        <View style={{height:200,width:200,backgroundColor:'yellow'}}></View>
        <View style={{height:200,width:200,backgroundColor:'pink'}}></View>
        <View style={{height:200,width:200,backgroundColor:'green'}}></View>
        <View style={{height:200,width:200,backgroundColor:'red'}}></View>
        <View style={{height:200,width:200,backgroundColor:'yellow'}}></View>
        <View style={{height:200,width:200,backgroundColor:'pink'}}></View>
      </ScrollView>
    </View>
  )
}
