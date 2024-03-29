import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import formatDate from "../../utils/formatDate";
import formatTime from "../../utils/formatTime";
import api from "../../services/api";
import { useFocusEffect } from '@react-navigation/native';

export default function Partidas() {

  const navigation = useNavigation(); 
  let [partidas, setPartidas] = useState([]);

  const { params } = useRoute();
  const { idChat } = params;

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

  const handleNavigationToMarcarPartida = useCallback(()=>{
    navigation.navigate('FormPartidas', {params} );
  },[])
  
  const handleNavigationToChat = useCallback(()=>{
    navigation.navigate('Chat', {params} );
  },[])
  
  const getDados = async () => {
    try {
      api
      .get(`/schedule?chat_id=${params}`)
      .then(function (response) {
        setPartidas(function(lastValue){
          return [...response.data.data]
        })
      }
      )
      .catch((err) => {
        // Alert.alert('a', `${idChat}`)
      });

    } catch(e) {
      console.error(e)
    }
  }


  useEffect(() => {
    getDados()
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getDados()
    }, [])
  );



  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <View style={styles.bodyPartGrupo}>

        <View style={styles.topoPartidas}>
          <Text style={styles.tituloDados}>Partidas</Text>
        </View>

        
        <Text style={styles.txtTitulo}>Partidas Marcadas:</Text>
        <View style={styles.rolagemPartidas}>
        <ScrollView  style={styles.gp}>
          
        {partidas.map(function(item){
            return (
              <View  style={styles.PartidasMarcadas} key={`partida-${item.id}`}>
                <View style={styles.cardPartida}>
                  <View style={styles.data}>
                    <Text style={styles.txtData}>Data:</Text>
                    <Text style={styles.txtData}>{formatDate(item?.date)}</Text>
                  </View>
                  <View style={styles.hora}>
                    <Text style={styles.txtHora}>Horário:</Text>
                    <Text style={styles.txtHora}>{item?.hour}</Text>
                  </View>
                </View>
                <View style={styles.descricao}>
                <Text style={styles.txtDesc}>Descrição</Text>
                <Text style={styles.txtDesc}>{item?.description}</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
        </View>
        <View style={styles.btnGrupo}>
        <RectButton style={styles.buttonGrupo} onPress={handleNavigationToMarcarPartida}> 
            <Text style={styles.buttonText}>Marcar nova partida</Text> 
          </RectButton> 
        <RectButton style={styles.buttonVoltar} onPress={handleNavigationToChat}> 
            <Text style={styles.buttonText}>Voltar</Text> 
          </RectButton> 
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

  tituloPartidas:{
    color:'#3956FF',
    fontSize:22,
    fontWeight:'bold'
  },

  topoPartidas:{
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

  
  rolagemPartidas:{
    width:'100%',
    height:480,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
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

  buttonVoltar: {
    width: 130,
    height: 40,
    backgroundColor: '#474747',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 4,
    fontSize: 16,
  },

  btnGrupo:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
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
  }


});
