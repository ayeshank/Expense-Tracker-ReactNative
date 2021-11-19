// import React, { Component } from 'react';

// import {
//   Text,
//   TouchableHighlight,
//   View,
// } from 'react-native';

// import RNHTMLtoPDF from 'react-native-html-to-pdf';

// export default class Example extends Component {
//   async createPDF() {
//     let options = {
//       html: '<h1>PDF TEST</h1>',
//       fileName: 'test',
//       directory: 'Documents',
//     };

//     let file = await RNHTMLtoPDF.convert(options)
//     // console.log(file.filePath);
//     alert(file.filePath);
//   }

//   render() {
//     return(
//       <View>
//         <TouchableHighlight onPress={this.createPDF}>
//           <Text>Create PDF</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }




// import React, { Component } from 'react';

// import { Alert, PermissionsAndroid, Platform, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';

// export default class Pdf extends Component {

//   constructor(props) {
//     super(props);
//     this.state={
//       filePath : ''
//     }
//   }



//   requestRunTimePermission=()=> {
//     var that = this;
//     async function externalStoragePermission() {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'External Storage Write Permission',
//           message:'App needs access to Storage data.',
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         that.createPDF_File();
//       } else {
//         alert('WRITE_EXTERNAL_STORAGE permission denied');
//       }
//     } 
//     catch (err) {
//       Alert.alert('Write permission err', err);
//       console.warn(err);
//     }
//    }
 
//     if (Platform.OS === 'android') {
//       externalStoragePermission();
//     } else {
//       this.createPDF_File();
//     }
//   }

// async createPDF_File() {
//     let options = {
//       // HTML Content for PDF.
//       // I am putting all the HTML code in Single line but if you want to use large HTML code then you can use + Symbol to add them.
//       html:
//         '<h1 style="text-align: center;"><strong>Welcome Guys</strong></h1><p style="text-align: center;">In This Tutorial we would learn about creating PDF File using HTML Text.</p><p style="text-align: center;"><strong>ReactNativeCode.com</strong></p>',
//       // Setting UP File Name for PDF File.
//       fileName: 'test',
 
//       //File directory in which the PDF File Will Store.
//       directory: 'docs',
//     };
 
//     let file = await RNHTMLtoPDF.convert(options);
 
//     console.log(file.filePath);
 
//     Alert.alert(file.filePath);
 
//     this.setState({filePath:file.filePath});
//   }


//   render() {
//     return (
//       <View style={styles.MainContainer}>
 
//          <TouchableOpacity 
//          onPress={this.requestRunTimePermission} 
//          activeOpacity={0.6} 
//          style={styles.button}>
 
//           <Text style={styles.text}>Click Here To Create PDF File</Text>
 
//         </TouchableOpacity>
 
//         <Text style={styles.text}>{'Save File Path = ' + this.state.filePath}</Text>
 
//       </View>
//     );
//   }


// }

// const styles = StyleSheet.create({
 
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20
//   },
 
//   button: {
//     width: '100%',
//     paddingTop:10,
//     paddingBottom:10,
//     backgroundColor: '#00E676',
//     borderRadius:9,
//   },
 
//   text: {
//     color: '#000',
//     textAlign:'center',
//     fontSize: 21
//   }
 
// });

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Button,
//   StyleSheet,
//   NativeModules,
//   Platform,
//   Text,
//   View
// } from 'react-native';


// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNPrint from 'react-native-print';

// export default class RNPrintExample extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       students:[
        
//       ]
//     }
//   }
//   renderTableHeader()
//   {
//     let header=Object.keys(this.state.students[0])
//     return header.map((key,index)=>{
//       return `<th key=${index}>${key.toUpperCase()}</th>`
//     })
//   }
//   renderTableData()
//   {
//     return this.state.students.map((student,index)=>{
//       const{id, name, age, email}=student
//       return(
//         `<tr key=${id}>
//         <td>${id}</td>
//         <td>${name}</td>
//         </tr>`
//       )
//     })
//   }
//   async printHTML(){
//     let html_content=
//     `
//     <style>
//     #title{
//       text-align: center;
//     font-family: Arial, Helvetica, sans-serif;
//     }
//     #students{
//       text-align: center;
//     font-family: Arial, Helvetica, sans-serif;
//     border-collapse: collapse;
//     border: 3px solid black;
//     width: 100%;
//     }
//     #students td, #students th{
//     border: 3px solid black;
//     }
//     #students th{
//       padding-top: 12px;
//       padding-bottom: 12px;
//       text-align: center;
//       background-color: blanchedalmond;
//       color: blue;
//       }
//       </style>
//       <div>
//       <h1 id='title' > React</h1>
//       <table id='students'>
//       <tbody>
//       <tr>${this.renderTableHeader}</tr>
//       ${this.renderTableData}
//       </tbody>  
//       </table>
//       </div>`
//       await RNPrint.print({
//         html:html_content
//       })
    
//   }

// }