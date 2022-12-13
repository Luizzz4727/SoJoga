import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import React, {useState, useEffect} from 'react';
import api from "../../services/api";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import {useNavigation} from '@react-navigation/native'; 

export default function Register() {
    
  let [usernameUsuario, setUsernameUsuario] = useState();
  let [nomeUsuario, setNomeUsuario] = useState();
  let [emailUsuario, setEmailUsuario] = useState();
  let [senhaUsuario, setSenhaUsuario] = useState();
  let [confirmarSenhaUsuario, setConfirmarSenhaUsuario] = useState();

  
  const navigation = useNavigation(); 

  function handleNavigationToLogin(){ 
    navigation.navigate('Login'); 
  } 
  async function Registrar(){
    
  api.post('/auth/register', { 
    username: usernameUsuario, 
    name: nomeUsuario,
    email: emailUsuario,
    password: senhaUsuario,
    confirmPassword: confirmarSenhaUsuario,
    acao: "create-user"
  }) 
  .then(function (response) {  
      showMessage({
        message: "Usuário Criado!",
        type: "Success",
      });
      handleNavigationToLogin()
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
      <FlashMessage position = "bottom" style={{elevation:1}}/> 
      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>

        <View style={styles.register}>

        <Text style={styles.txtregister}>Criar Conta</Text>

        <TextInput 
             style={styles.input} 
             placeholder="Nome" 
             autoCorrect={false} 
             onChangeText={setNomeUsuario}
         /> 

        <TextInput 
             style={styles.input} 
             placeholder="Nick" 
             autoCorrect={false} 
             onChangeText={setUsernameUsuario}
         /> 

      <TextInput 
             style={styles.input} 
             placeholder="E-mail" 
             autoCorrect={false} 
             onChangeText={setEmailUsuario}
         /> 

         <TextInput 
           style={styles.input} 
           placeholder="Senha"            
           autoCorrect={false} 
           secureTextEntry={true} 
           onChangeText={setSenhaUsuario}
         /> 

        <TextInput 
           style={styles.input} 
           placeholder="Confirmar Senha"            
           autoCorrect={false} 
           secureTextEntry={true} 
           onChangeText={setConfirmarSenhaUsuario}
         /> 

        <RectButton style={styles.button} onPress={Registrar}> 
        <Text style={styles.buttonText}>CADASTRAR</Text> 
        </RectButton> 
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
  
  input: { 
    width:260,
    height: 50, 
    backgroundColor: '#F5F5F5', 
    border: '1px solid black',
    borderRadius: 10, 
    marginBottom: 8, 
    paddingHorizontal: 24, 
    fontSize: 16, 
  }, 

  button:{
    height: 60, 
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

  imgFundo: {
    flex:1,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3956FF',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },

  register:{
    width:'80%',
    height:600,
    backgroundColor:'#FFF',
    borderRadius:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around'
  },

  txtregister:{
    fontSize:20,
    fontWeight:'bold',
    color:'#3956FF'
  }
  

});
