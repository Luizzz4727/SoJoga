import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import React, {useState, useEffect} from 'react';
import api from "../../services/api";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {

  const navigation = useNavigation(); 

  function handleNavigationToRegister(){ 
    navigation.navigate('Register'); 
  } 

  function handleNavigationToHome(){ 
    navigation.navigate('Home'); 
  } 

  let [loginUsuario, setLoginUsuario] = useState();
  let [senhaUsuario, setSenhaUsuario] = useState();


  // inserirToken = async (value) => {
  // try {
  //   // await AsyncStorage.setItem('token', value)

  // } catch(e) {
  //   // save error
  // }

  const inserirToken = async (value) => {
    // Alert.alert('chegou', value)
    try {
      await AsyncStorage.setItem('@token', value, function(){
        console.log("foi", value)
      })
    } catch (e) {
      console.error(e)
      // saving error
    }
  }

  const saveUserLogged = async (value) => {
    // Alert.alert('chegou', value)

    console.log('asdasd', value)
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(value))
    } catch (e) {
      console.error(e)
      // saving error
    }
  }

//   console.log('Done.')
// }

useEffect(()=>{
  const validateToken = async ()=>{
    const token = await AsyncStorage.getItem('@token')

    if(token){
      // navigation.navigate('Home'); 
    }
  }

  validateToken()
},[])

  async function Logar(){
    
  api.post('/auth/login', { 
    username: loginUsuario, 
    password: senhaUsuario
  }) 
  .then(function (response) { 
      inserirToken(response.data.to_use)
      saveUserLogged(response.data.user)
      showMessage({
        message: "Usuário Autenticado!",
        type: "Success",
      });

      handleNavigationToHome()
  }) 
  .catch(error => {
      showMessage({
        message: "Alerta: ",
        description: error.response.data.message,
        type: "danger",
      });
  });

  }

  return (
    <View style={styles.container}>
    <FlashMessage position = "bottom"/> 
      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <Text style={styles.tituloLogin}>Sem amigos para jogar?</Text>
        <View style={styles.contLogin}>
        <Text style={styles.titulo}>SEM PROBLEMAS!</Text>
        <Text style={styles.txtlogin}>Nós temos a solução, aqui você achará seu parceiro ideal para suas gamaplays. Aqui tem pessoas de varios estilos e que jogam games diferentes. </Text>
        <Text style={styles.txtlogin}>Entre, cadastre-se e conheça nossa rede!</Text>
        
        <RectButton style={styles.registrar} onPress={handleNavigationToRegister}> 
          <Text style={styles.registrarText}>CADASTRAR</Text> 
        </RectButton> 
        </View>
       </ImageBackground>
      <View style={styles.login}>
      <Text style={styles.txtPerLogin}>Já possui conta? Então entre abaixo:</Text>

        <TextInput 
              style={styles.input} 
              placeholder="Usuário" 
              autoCorrect={false} 
              onChangeText={setLoginUsuario}
          /> 
          
          <TextInput 
            style={styles.input} 
            placeholder="Senha"            
            autoCorrect={false} 
            secureTextEntry={true} 
            onChangeText={setSenhaUsuario}
          />

        <RectButton style={styles.button} onPress={Logar}> 
                <Text style={styles.buttonText}>ENTRAR</Text> 
            </RectButton> 
      </View>
      
      <StatusBar style="auto" />
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
    width:320,
    height: 50, 
    backgroundColor: '#F5F5F5', 
    border: '1px solid black',
    borderRadius: 10, 
    marginBottom: 8, 
    paddingHorizontal: 24, 
    fontSize: 16, 
  }, 

  button:{
    width:250,
    height: 50, 
    backgroundColor: '#3956ff', 
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
    color:'#FFF'
  },

  registrar:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },

  registrarText:{
    fontWeight:'bold',
    color:'#3956FF',
    fontSize:18,
    width:250,
    height:50,
    backgroundColor:'#FFF',
    paddingTop:11,
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
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

  tituloLogin:{
    color:'#FFF',
    fontSize:25,
    fontWeight:'bold',
    marginTop:30
  },

  txtlogin:{
    color:'#FFF',
    fontSize:17,
    textAlign:'justify'
  },

  contLogin:{
    display: 'flex',
    justifyContent:'space-between',
    flexDirection:'column',
    height:220,
    marginBottom:30,
  },

  txtPerLogin:{
    fontSize:20,
    fontWeight:'bold',
    color:'#3956FF'
  },

  login:{
    marginTop:20,
    height:260,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  }
  

});
