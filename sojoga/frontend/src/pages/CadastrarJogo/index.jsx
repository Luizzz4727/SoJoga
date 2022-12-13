import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'; 
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CadastrarJogo() {

  const navigation = useNavigation();

  
  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  function handleNavigationToChat() {
    navigation.navigate('Chat');
  }

  function handleNavigationToHomeNotificacao() {
    navigation.navigate('Notificacao');
  }

  function handleNavigationToPerfil() {
    navigation.navigate('Perfil');
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
        style={styles.imgFundo}>
        <View style={styles.topoAdcJogos}>
          <Image style={styles.imgAdcJogos} source={require('../../assets/images/ADM.png')} />
          <Text style={styles.titulo}>ADM</Text>
        </View>
        <View style={styles.bodyAdcJogos}>
        <Text style={styles.txtTitulo}>Cadastro de Jogos</Text>
        <View style={styles.SelecionarJogo}>
        <Text style={styles.txtTituloAdc}>Escreva o nome do Jogo:</Text>
        <TextInput 
              style={styles.input} 
              autoCapitalize="characters" 
              autoCorrect={false} 
          /> 
        </View>
        <View style={styles.btnjogo}>
        <RectButton style={styles.buttonJogo} > 
            <Text style={styles.buttonText}>Cadastrar</Text> 
          </RectButton> 
          <RectButton style={styles.buttonVoltar} > 
            <Text style={styles.buttonTextBlack}>Voltar</Text> 
          </RectButton> 
        </View>


        <View style={styles.menu}>
          <RectButton style={styles.btnMenu}  onPress={handleNavigationToHome}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/home.png')}/>
          </RectButton> 
          <RectButton style={styles.btnMenu} onPress={handleNavigationToChat}> 
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

  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF'
  },

  buttonTextBlack:{
    fontWeight: 'bold',
    fontSize: 17,
    color: '#474747'
  },

  imgFundo:{
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

  topoAdcJogos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40
  },

  imgAdcJogos: {
    width: 150,
    height: 150,
    borderRadius: 110,
  },

  txtTitulo: {
    color: '#474747',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },

  txtTituloAdc:{
    color: '#474747',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    width:'100%'
  },

  bodyAdcJogos: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 480,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },


  buttonJogo: {
    width: 180,
    height: 40,
    backgroundColor: '#3956FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 2,
    marginTop: 4,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  buttonVoltar:{
    width: 130,
    height: 40,
    backgroundColor: '#F5F5F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 2,
    marginTop: 4,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  btnjogo: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems:'center',
    width: '90%',
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

  selectJogo:{
    width:'90%',
    marginTop:20
  },

  SelecionarJogo:{
    width:'90%',
    alignItems:'center'
  },

  input: { 
    width:'100%',
    height: 50, 
    backgroundColor: '#FFF', 
    border: '1px solid black',
    borderRadius: 15, 
    marginBottom: 8, 
    paddingHorizontal: 24, 
    fontSize: 16, 
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity:  0.25,
    shadowRadius: 20.00,
    elevation: 4
  },
});
