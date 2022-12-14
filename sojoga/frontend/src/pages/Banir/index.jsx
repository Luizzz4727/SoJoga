import {View, Button, Modal, Image, ImageBackground, StyleSheet, Text, Pressable, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import React, { useState } from 'react';


export default function Banir() {
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
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
  

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <View style={styles.bodyPartGrupo}>

        <View style={styles.topoPartidas}>
          <Text style={styles.tituloDados}>Banir Jogadores</Text>
        </View>
        <View style={styles.viewPesquisar}>
          <TextInput 
              style={styles.input} 
              placeholder="Pesquisar Jogador"
              autoCapitalize="characters" 
              autoCorrect={false} 
          /> 
          <RectButton style={styles.buttonInput} > 
                <Image style={styles.imgLupa} source={require('../../assets/images/lupa.png')} />
            </RectButton>
          </View>
        <View style={styles.rolagemPartidas}>
          
        <ScrollView  style={styles.gp}>
          
          <View  style={styles.grupos}>
            <View style={styles.gptxt}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
            </View>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>Banir</Text>
                </Pressable>
          </View>
          
          <View  style={styles.grupos}>
            <View style={styles.gptxt}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
            </View>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>Banir</Text>
                </Pressable>
          </View>
          
          <View  style={styles.grupos}>
            <View style={styles.gptxt}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
            </View>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>Banir</Text>
                </Pressable>
          </View>
          
          <View  style={styles.grupos}>
            <View style={styles.gptxt}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')}/>
              <Text style={styles.tituloGrupo}>Dogman</Text>
            </View>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>Banir</Text>
                </Pressable>
          </View>
        </ScrollView>
        </View>
        <View style={styles.btnGrupo}>
        <RectButton style={styles.buttonGrupo} > 
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
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja banir permanentemente esse Jogador?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Banir Jogador</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

  buttonBack:{
    width:100,
    height: 45, 
    backgroundColor: '#7EDD2A', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginBottom: 8, 
    marginTop: 8,  
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
    marginTop:10,
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
    marginTop:65,
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

  gp:{
    width:'90%',
    margin:10
  },

  imgGrupo:{
    height:50,
    width:50,
    borderRadius:70,
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
    width:100,
    height: 50, 
    backgroundColor: '#3956FF', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginTop: 4, 
    fontSize: 16, 
  },

  viewPesquisar:{
    display:'flex',
    justifyContent:'space-around',
    width:'90%',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#FFF',
    border: '1px solid black',
    borderRadius: 10, 
    marginTop:27,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 4
  },

  
  input: { 
    width:'80%',
    height: 40, 
    backgroundColor: '#FFF', 
    border: '1px solid black',
    borderRadius: 10, 
    paddingHorizontal: 15, 
    fontSize: 16, 
  }, 

  grupos:{
    height:70,
    backgroundColor:'#FFF',
    width:'99%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
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
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    width:200,
    textAlign: "center"
  },

  gptxt:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


});
