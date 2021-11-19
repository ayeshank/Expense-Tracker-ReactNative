import React,{useState,useEffect} from 'react';
import { StyleSheet, Text,TextInput, View,Button,TouchableOpacity } from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import GradientButton from 'react-native-gradient-buttons';



export default function MyForm({navigation}) {
    const [cont, setCont] = useState('');
    const [email, setemail] = useState('');
    const [show, setShow] = useState(false);

  return (
    <View style={styles.fcontainer}>
      <View style={styles.fin}>
      <FloatingLabelInput
            containerStyles={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical:10,
            borderColor: 'grey',
            borderRadius: 4,}}        
        label={'Enter Email/ Username'}
        value={email}
        onChangeText={(value) => setemail(value)}
      />
        
        <Text>{"\n"}</Text>
      
      <FloatingLabelInput
      containerStyles={{
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical:10,
        borderColor: 'grey',
        borderRadius: 4,}}
        // secureTextEntry={true}
        label={'Enter Password'}
        isPassword
        togglePassword={show}
        value={cont}
        onChangeText={(value) => setCont(value)}
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
      />
      
      <TouchableOpacity style={styles.loginbutton} 
      onPress={()=> {navigation.navigate('Home',{
        myName:email,
        myAge:"20",
      })
    }
      }>
     { /** // email ? alert(`Your id is ${email}`):alert('No email registered')**/}
      
      <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      </View>
            
      {/* <Button 
      style={styles.loginbutton} 
      title="Login"
      onPress={() => alert('Login Successfully')}
      ></Button> */}
          {/* <GradientButton text="Login" width='40%' blueMarine impact style={styles.loginbutton} /> */}
      </View>
  )
}
const styles = StyleSheet.create({
    incontainer: {
        fontSize:30,
        textAlign:"left",
        backgroundColor:"white",
    },
    fcontainer: {
      // backgroundColor:"yellow",
        width:"100%",
        alignItems:"center",
    },
    fin:{
      marginTop:"60%",
      width:"90%", 
    },
    loginbutton:{
        fontWeight:'bold',
        padding:10,
        marginTop:"10%",
        marginLeft:"25%",
        borderRadius:25,
        width:"50%",
        color:"black",
        backgroundColor:"transparent",
        borderWidth:2,
        borderColor:"#19b1a8",
    },
    btnText: {
      color: "#19b1a8",
      fontSize: 15,
      justifyContent: "center",
      textAlign: "center",
    },
  });