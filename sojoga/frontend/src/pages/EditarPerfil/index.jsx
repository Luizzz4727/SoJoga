import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import React, {useState, useEffect} from 'react';
import api from "../../services/api";
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
import {useNavigation} from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditarPerfil() {
    
  let [usernameUsuario, setUsernameUsuario] = useState();
  let [nomeUsuario, setNomeUsuario] = useState();
  let [emailUsuario, setEmailUsuario] = useState();
  let [senhaUsuario, setSenhaUsuario] = useState();
  let [confirmarSenhaUsuario, setConfirmarSenhaUsuario] = useState();
  let [user, setUser] = useState();

  
  const navigation = useNavigation(); 


  function handleNavigationToPerfil(){ 
    navigation.navigate('Perfil'); 
  } 

  async function Editar(){
    
  api.post('/auth/register', { 
    username: usernameUsuario, 
    name: nomeUsuario,
    email: emailUsuario,
    password: senhaUsuario,
    confirmPassword: confirmarSenhaUsuario,
    acao: "update-user"
  }) 
  .then(function (response) {  
      Alert.alert("foi")
      showMessage({
        message: "Usuário Criado!",
        type: "Success",
      });
      handleNavigationToPerfil()
  }) 
  .catch(error => {
      Alert.alert("nao foi", error.response.data.message)
      showMessage({
        message: "Alerta: ",
        description: error.response.data.message,
        type: "danger",
      });
  });
}


useEffect(() => {

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('@token')
      api
      .get("/get/user", {
        headers: {
          'Authorization': `${token}`
        }
      })
      .then(function (response) {
        setUser(response.data.user)
        setNomeUsuario(response.data.user.name)
        setUsernameUsuario(response.data.user.username)
        setEmailUsuario(response.data.user.email)
      }
      )
      .catch((err) => {
        console.error(err.response)
        // Alert.alert("ops! ocorreu um erro" + response.data.message);
      });

    } catch(e) {
      console.error(e)
      // error reading value
    }
  }

  getData()
  
}, []);

  return (
    <View style={styles.container}>
      <FlashMessage position = "bottom" style={{elevation:1}}/> 
      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>

        <View style={styles.register}>

        <Text style={styles.txtregister}>Editar Perfil</Text>

        <TextInput 
             style={styles.input} 
             placeholder="Nome"
             value={nomeUsuario}
             autoCorrect={false} 
             onChangeText={setNomeUsuario}
         /> 

        <TextInput 
             style={styles.input} 
             placeholder="Nick" 
             value={usernameUsuario}
             autoCorrect={false} 
             onChangeText={setUsernameUsuario}
         /> 

      <TextInput 
             style={styles.input} 
             placeholder="E-mail" 
             value={emailUsuario}
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

         
          <View style={styles.boxButton}>
            <RectButton style={styles.button} onPress={Editar}> 
              <Text style={styles.buttonText}>EDITAR</Text> 
            </RectButton> 
            <RectButton style={styles.buttonBack} onPress={handleNavigationToPerfil}> 
              <Text style={styles.buttonText}>VOLTAR</Text> 
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
    height: 40, 
    backgroundColor: '#3956ff', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginBottom: 8, 
    marginTop: 8, 
    width:130,
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
  }, 

  buttonBack:{
    height: 40, 
    backgroundColor: '#474747', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginBottom: 8, 
    marginTop: 8, 
    width:100,
    fontSize: 16, 
  },
  
  boxButton:{
    display:'flex',
    alignItems:'center'
  }
  

});
