import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import formatDate from '../../../../utils/formatDate';

import getGameGroupImage from '../../../../utils/gameGroupImage';


export default function GruposRoute({groups}) {
    const navigation = useNavigation();

    const handleNavigateToChat = (id)=>{
        navigation.navigate('Chat',{id});
    }

    function handleNavigationToCriarGrupo() {
      navigation.navigate('FormGrupos');
    }
  
    useEffect(()=>{
        console.log('aquiiix',groups)
    },[groups])
//Chat
  return (
    <View style={[styles.scene, { backgroundColor: '#FFF' }]}>
      
      <View style={styles.btnCriar}>
            <Text style={styles.txtCriar}>Não achou o que procurava?</Text>
          <RectButton style={styles.button} onPress={handleNavigationToCriarGrupo}> 
            <Text style={styles.buttonText}>Criar Grupo</Text> 
          </RectButton> 
          </View>
        <View style={styles.bodyRecomendacao}>
        <ScrollView>
            {groups.map((item)=>{
            const {name, path_image, created_at, created_by, game, participants,id} = item
            return (
                <RectButton style={styles.boxJogo} key={`chat-grupo-${id}`} onPress={()=>{
                    handleNavigateToChat(id)
                }}>
                <Text style={styles.txtBoxTopoJogo}>{name}</Text>
                <Image style={styles.imgBoxJogo} source={getGameGroupImage(game)} />
                <View style={styles.txtBoxJogo}>
                    <Text style={styles.txtBoxFimJogo}>Jogadores: {participants}</Text>
                    <Text style={styles.txtDataBox}>Data de Criação: {formatDate(created_at)}</Text>
                    <Text style={styles.txtBoxFimJogo}>Jogo: {game}</Text>
                    <Text style={styles.txtBoxFimJogo}>Criador: {created_by}</Text>
                </View>
                </RectButton>
            )
            })}
        </ScrollView>
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


  input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFF',
    border: '1px solid black',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  button: {
    width: 120,
    height: 45,
    backgroundColor: '#3956FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 8,
    fontSize: 16,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF'
  },

  buttonTextBlack: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#474747'
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
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  },

  topoPesquisa: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },

  txtTitulo: {
    color: '#474747',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },

  bodyPesquisa: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 660,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
      width: -20,
      height: -18,
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

  selectJogo: {
    width: '90%',
    marginTop: 20
  },

  SelecionarJogo: {
    width: '90%',
    alignItems: 'center'
  },

  texttopoPesquisa: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold'
  },

  textHome: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold'
  },

  viewPesquisar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 350,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    border: '1px solid black',
    borderRadius: 10,
    marginTop: 27,
  },

  bodyRecomendacao: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  boxJogo: {
    width: 350,
    borderRadius: 20,
    position: 'relative',
    marginBottom: 15,
    marginTop: 5
  },

  imgBoxJogo: {
    width: '100%',
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  txtBoxTopoJogo: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    textAlign: 'center',
    overflow: 'hidden',
    color: '#3956FF',
    fontWeight: 'bold',
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
  },

  txtBoxJogo: {
    width: '100%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    textAlign: 'center',
    overflow: 'hidden',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
  },

  txtDataBox: {
    width: '60%',
    paddingLeft: 15
  },

  txtBoxFimJogo: {
    width: '40%',
    paddingLeft: 15
  },

  map: {
    width: '100%'
  },
  scene: {
    flex: 1
  },

  
  rolagemGrupos:{
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  
  grupos:{
    height:90,
    backgroundColor:'#DCE4FF',
    width:'99%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20,
    marginBottom:20,
  },

  gp:{
    width:'90%',
    margin:10
  },

  imgGrupo:{
    height:70,
    width:70,
    borderRadius:10,
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
    color:'#474747'
  },

  btnCriar:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    justifyContent:'space-between',
    paddingLeft:15,
    paddingRight:10,
    backgroundColor:'#052199'
  },

  txtCriar:{
    fontSize:16,
    color:'#FFF'
  }
});
