import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import React, {useState, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PerfilJogador() {

  const navigation = useNavigation(); 

  let [user, setUser] = useState();
  let [jogos, setJogos] = useState([]);
  let [grupos, setGrupos] = useState([]);

  const { params } = useRoute();
  const {idJogador} = params;

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


  async function CriarChat(){

    
    api.post('/chat', { 
      user_id: idJogador,
      name: user?.name,
      is_private: 1,
      acao: 'create-chat'
    }) 
    .then(function (response) { 
      Alert.alert("Chat criado com sucesso!!")
        showMessage({
          message: "Jogo Adicionado!",
          type: "Success",
        });
        handleNavigationToListaChats();
    }) 
    .catch(error => {
      // Alert.alert("nao criou", JSON.stringify(error.response.data))
        showMessage({
          message: "Alerta: ",
          description: error.response.data.message,
          type: "danger",
        });
    });
    }




  async function getData(){
    
    api.get(`/get/user/${idJogador}`) 
    .then(function (response) {  
        // Alert.alert("foi")
        setUser(response.data.user)
        setGrupos(function(lastValue){
          return [...response.data.groups]
        })
        setJogos(function(lastValue){
          return [...response.data.games]
        })

    }) 
    .catch(error => {
        Alert.alert("nao foi", error.response.data.message)
    });
  }

  useEffect(() => {

    getData()
    
  }, []);


  useFocusEffect(
    React.useCallback(() => {
      getData()
    }, [])
  );

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <View style={styles.topoPerfil}>
          <Image style={styles.imgPerfil} source={require('../../assets/images/gwen.png')}/>
          <Text style={styles.titulo}>{user?.username}</Text>
          <RectButton style={styles.button} onPress={CriarChat}> 
            <Text style={styles.buttonText}>Conversar</Text> 
          </RectButton> 
        </View>
        <View style={styles.bodyPerfil}>
        <Text style={styles.txtTitulo}>Jogos</Text>
        <View style={styles.rolagemJogos}>
        <ScrollView
          horizontal={true}
        >
          {jogos.map(function(item){
            return (
              <Image key={`jogo-${item.id}`} style={styles.imgJogo} source={require('../../assets/images/logo-fortnite.png')}/>
            )
          })}
        </ScrollView>
        </View>
        <View style={styles.btnjogo}>
        </View>
        <Text style={styles.txtTitulo}>Grupos</Text>
        <View style={styles.rolagemGrupos}>
        <ScrollView  style={styles.gp}>
          {grupos.map(function(item){
              return (
                <View  style={styles.grupos} key={`grupo-${item.id}`}>
                <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
                <View style={styles.txtGrupos}>
                <Text style={styles.tituloGrupo}>{item.name}</Text>
                <View style={styles.gpTxt}>
                  <Text style={styles.tituloJogo}>{item.game}</Text>
                  <Text style={styles.tituloJogo}>{item.participants}</Text>
                </View>
              </View>
            </View>
              )
            })}
        </ScrollView>
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
    width:150,
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
    color:'#FFF',
    fontSize:25,
    fontWeight:'bold'
  },

  topoPerfil:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:40
  },

  imgPerfil:{
    width:150,
    height:150,
    borderRadius:110,
  },

  txtTitulo:{
    color:'#474747',
    fontSize:20,
    fontWeight:'bold',
    marginTop:5
  },

  bodyPerfil:{
    backgroundColor:'#FFF',
    width:'100%',
    height:480,
    borderTopEndRadius:40,
    borderTopStartRadius:40,
    display:'flex',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  
  rolagemJogos:{
    marginTop:10,
    height:100,

  },

  imgJogo:{
    
    width:80,
    height:80,
    margin:10
  },

  buttonJogo:{
    width:180,
    height: 40, 
    backgroundColor: '#3956FF', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginBottom: 2, 
    marginTop: 4, 
    paddingHorizontal: 24, 
    fontSize: 16, 
  },

  btnjogo:{
    display:'flex',
    justifyContent:'flex-end',
    flexDirection:'row',
    width:'90%',
  },

  rolagemGrupos:{
    width:'100%',
    height:200,
    display:'flex',
    alignItems:'center'
  },
  
  grupos:{
    height:90,
    backgroundColor:'#3956FF',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20,
    marginBottom:10
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
    fontSize:17,
    fontWeight:'bold',
    color:'#FFF'
  },

  tituloJogo:{
    fontSize:17,
    fontWeight:'bold',
    color:'#FFF'
  },

  buttonSair:{
    width:180,
    height: 45, 
    backgroundColor: '#FF0000', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginBottom: 8, 
    marginTop: 8, 
    paddingHorizontal: 24, 
    fontSize: 16, 
  },

  btnSair:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    width:'90%'
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
  }


});
