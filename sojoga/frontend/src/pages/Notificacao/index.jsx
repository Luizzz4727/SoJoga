import { View, Button, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import SelectList from 'react-native-dropdown-select-list';


export default function Notificacao() {

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Fortnite' },
    { key: '2', value: 'League of Legends' },
    { key: '3', value: 'Valorrant' },
  ];

  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  function handleNavigationToPerfil() {
    navigation.navigate('Perfil');
  }


  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
        style={styles.imgFundo}>
        <View style={styles.bodyPartGrupo}>

          <View style={styles.topoPartidas}>
            <Text style={styles.tituloDados}>Notificações</Text>
          </View>
          <View style={styles.rolagemPartidas}>
          <ScrollView style={styles.gp}>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            <View style={styles.grupos}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
              <Text style={styles.tituloJogo}>A partida do grupo de “Os Grandes Construtores” começará em 30 minutos. </Text>
              </View>
            </View>
            </ScrollView>
          </View>

          <View style={styles.menu}>
            <RectButton style={styles.btnMenu} onPress={handleNavigationToHome}>
              <Image style={styles.imgMenu} source={require('../../assets/images/home.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/chat-ativo.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/notificacao.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu} onPress={handleNavigationToPerfil}>
              <Image style={styles.imgMenu} source={require('../../assets/images/perfil.png')} />
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

  button: {
    width: 120,
    height: 45,
    backgroundColor: '#7EDD2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  imgFundo: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3956FF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },

  titulo: {
    color: '#474747',
    fontSize: 25,
    fontWeight: 'bold'
  },

  tituloDados: {
    color: '#474747',
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%'
  },

  topoPartidas: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 50,
  },


  bodyPartGrupo: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    marginTop: 60,
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 60
  },

  menu: {
    display: 'flex',
    justifyContent: 'space-around',
    height: 69,
    backgroundColor: '#FFF',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 24
  },

  btnMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },


  rolagemPartidas: {
    width: '100%',
    height:'80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grupos:{
    backgroundColor:'#DCE4FF',
    width:'99%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20,
    marginBottom:20,
    padding:10
  },

  gp:{
    width:'90%',
    margin:10
  },

  imgGrupo:{
    height:44,
    width:44,
    borderRadius:50,
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
    color:'#052199'
  }, 

  txtJogador:{
    display:'flex',
    flexDirection:'column',
  },

  tituloDados:{
    color:'#474747',
    fontSize:20,
    fontWeight:'bold',
    width:'100%',
    alignItems:'center'
  },

  topoTitulo:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },

  tituloJogo:{
    fontSize:14,
    width:'60%',
    color:'#474747'
  }


});
