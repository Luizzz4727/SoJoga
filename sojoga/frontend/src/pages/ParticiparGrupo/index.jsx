import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import api from "../../services/api";

export default function ParticiparGrupo() {

  const navigation = useNavigation(); 

  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  function handleNavigationToListaChats() {
    navigation.navigate('ListaChats');
  }

  function handleNavigationToHomeNotificacao() {
    navigation.navigate('Notificacao');
  }

  function handleNavigationToPerfil() {
    navigation.navigate('Perfil');
  }

  const getDados = async () => {
    try {

      api
      .get(`/chat?chat_id=${id}`)
      .then(function (response) {
            setChats(response.data.data.chats)
         console.log('a', JSON.stringify(response.data.data.participants))
          setParticipantes(function(lastValue){
            return [...response.data.data.participants]
          })
      }
      )
      .catch((err) => {
        Alert.alert('deu ruim', JSON.stringify(response.data))
        console.error(err.response)
      });

    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getDados()
    
  }, []);



  
  
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <View style={styles.bodyPartGrupo}>

        <View style={styles.topoPartGrupo}>
          <Text style={styles.tituloDados}>Dados do Grupo</Text>
          <Image style={styles.imgPartGrupo} source={require('../../assets/images/gwen.png')}/>
          <Text style={styles.tituloPartGrupo}  numberOfLines={1}>Os grandes construtores</Text>
        </View>

        
        <Text style={styles.txtTitulo}>Participantes</Text>
        <View style={styles.rolagemGrupos}>
        <ScrollView  style={styles.gp}>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
          <View  style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
          </View>
        </ScrollView>
        <View style={styles.btnGrupo}>
        <RectButton style={styles.buttonGrupo} > 
            <Text style={styles.buttonText}>Participar do Grupo</Text> 
          </RectButton> 
        </View>
        </View>
        
        <View style={styles.menu}>
          <RectButton style={styles.btnMenu}  onPress={handleNavigationToHome}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/home.png')}/>
          </RectButton> 
          <RectButton style={styles.btnMenu} onPress={handleNavigationToListaChats}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/chat.png')}/>
          </RectButton>  
          <RectButton style={styles.btnMenu} onPress={handleNavigationToHomeNotificacao}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/notificacao.png')}/>
          </RectButton> 
          <RectButton style={styles.btnMenu} onPress={handleNavigationToPerfil}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/perfil-ativo.png')}/>
          </RectButton> 
        </View>
        </View>
        
        
     </ImageBackground>
     
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
    width:120,
    height: 45, 
    backgroundColor: '#7EDD2A', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginBottom: 8, 
    marginTop: 8, 
    paddingHorizontal: 24, 
    fontSize: 16, 
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

  tituloPartGrupo:{
    color:'#3956FF',
    fontSize:22,
    fontWeight:'bold'
  },

  topoPartGrupo:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:40,
    height:220,
  },

  imgPartGrupo:{
    width:120,
    height:120,
    borderRadius:110,
  },

  txtTitulo:{
    color:'#474747',
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

  
  rolagemGrupos:{
    width:'100%',
    height:270,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  
  grupos:{
    height:90,
    backgroundColor:'#FFF',
    width:'99%',
    display:'flex',
    flexDirection:'row',
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

  gp:{
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

  tituloGrupo:{
    fontSize:20,
    fontWeight:'bold',
    color:'#3956FF'
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



});
