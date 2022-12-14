import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation, useRoute} from '@react-navigation/native'; 
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import formatTime from '../../../../utils/formatTime';


export default function OtherMessage({message, time}) {
  return (
  <View style={styles.boxPropria}>
    <View style={styles.boxMsg}>
      <Text style={styles.msgs}>{message}</Text>
      <Text style={styles.horaMsg}>{formatTime(time)}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    width:40,
    height: 40, 
    backgroundColor: '#3956FF', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50
  },

  buttonText:{
    fontWeight:'bold',
    fontSize:17,
    color:'#FFF'
  },

  imgFundo: {
    flex:1,
    width: '100%',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#3956FF',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },

  titulo:{
    color:'#474747',
    fontSize:25,
    fontWeight:'bold'
  },

  tituloDados:{
    color:'#474747',
    fontSize:20,
    fontWeight:'bold',
    width:'90%'
  },

  tituloPartidas:{
    color:'#3956FF',
    fontSize:22,
    fontWeight:'bold'
  },

  topoChat:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    height:50,
  },

  imgPartidas:{
    width:120,
    height:120,
    borderRadius:110,
  },

  txtTitulo:{
    color:'#3956FF',
    fontSize:20,
    fontWeight:'bold',
    marginTop:5
  },

  bodyPartGrupo:{
    backgroundColor:'#FFF',
    width:'100%',
    height:'100%',
    marginTop:60,
    borderRadius:40,
    display:'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingBottom:60
  },

  menu:{
    display:'flex',
    justifyContent:'space-around',
    height:69,
    backgroundColor:'#FFF',
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 24
  },

  btnMenu:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  
  rolagemChat:{
    width:'100%',
    height:'70%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#F5F5F5'
  },
  
  PartidasMarcadas:{
    backgroundColor:'#3956FF',
    width:'99%',
    display:'flex',
    alignItems:'center',
    borderRadius:20,
    marginBottom:10,
    shadowColor: "#000",
    paddingLeft:20,
    paddingRight:20,
    shadowOffset:{
    width: 0,
    height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
  },

  chat:{
    width:'90%',
    margin:10
  },

  imgGrupo:{
    height:70,
    width:70,
    borderRadius:70,
    marginLeft:15,
    marginRight:15  
  },

  gpTxt:{
    display:'flex',
    width:'60%',
    flexDirection:'row',
    justifyContent:'space-between'
  },

  txtGrupos:{
    display:'flex',
    justifyContent:'space-between',
    height:50
  },

  tituloChat:{
    fontSize:17,
    fontWeight:'bold',
    color:'#3956FF',
    backgroundColor:'#FFF'
  }, 
  
  buttonGrupo:{
    width:210,
    height: 40, 
    backgroundColor: '#3956FF', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginTop: 4, 
    fontSize: 16, 
  },

  btnGrupo:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    width:'90%',
  },

  cardPartida:{
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%',
    flexDirection:'row',
    borderBottomWidth:2,
    borderColor:'#FFF',
    padding:10
  },

  txtData:{
    color:'#FFF',
    fontWeight:'bold'
  },

  txtHora:{
    color:'#FFF',
    fontWeight:'bold'
  },

  txtDesc:{
    color:'#FFF',
    fontWeight:'bold'
  },

  descricao:{
    display:'flex',
    justifyContent:'flex-start',
    width:'100%',
    padding:10
  },
  
  boxInput:{
    width:'80%',
    height: 50, 
    backgroundColor: '#FFF', 
    borderRadius: 25, 
    marginBottom: 8, 
    fontSize: 16, 
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 4,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10
  },

  input: { 
    width:'90%',
    height:39,
    marginRight:10,
    borderRadius:50
  },
  
  inputDesc: { 
    width:320,
    height: 200, 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    marginBottom: 8, 
    fontSize: 16, 
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 4,
    alignItems:'flex-start'
  },

  imgChat:{
    width:50,
    height:50,
    borderRadius:50,
    marginLeft:20,
    marginRight:20
  },

  topoChat:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    marginTop:10
  },

  boxPropria:{
    display:'flex',
    width:'100%',
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  },

  boxMsg:{
    display:'flex',
    backgroundColor:'#3956FF',
    width:'80%',
    padding:10,
    borderRadius:15
  },
  
  msgs:{
    display:'flex',
    width:'100%',
    color:'#FFF',
    fontSize:15
  },

  horaMsg:{
    textAlign:'right',
    fontSize:13,
    color:'#FFF'
  },

  boxJogador:{
    display:'flex',
    width:'100%',
    justifyContent:'flex-start',
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  },

  boxMsgJogador:{
    display:'flex',
    backgroundColor:'#474747',
    width:'80%',
    padding:10,
    borderRadius:15
  },

  tituloJogador:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:16,
    marginBottom:7
  }


});
