import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 

export default function Login() {

  const navigation = useNavigation(); 

  function handleNavigationToRegister(){ 
    navigation.navigate('Register'); 
  } 

  return (
    <View style={styles.container}>
      <TextInput 
             style={styles.input} 
             placeholder="E-mail" 
             maxLength={2} 
             autoCapitalize="characters" 
             autoCorrect={false} 
         /> 

         <TextInput 
           style={styles.input} 
           placeholder="Senha"            
           autoCorrect={false} 
           secureTextEntry={true} 
         /> 

      <RectButton style={styles.button} > 
              <Text style={styles.buttonText}>ENTRAR</Text> 
          </RectButton> 
         <RectButton style={styles.registrar} onPress={handleNavigationToRegister}> 
              <Text style={styles.registrarText}>CRIAR CONTA</Text> 
          </RectButton> 
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
    height: 60, 
    backgroundColor: '#FFF', 
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

  registrar:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  registrarText:{
    fontWeight:'bold'
  },

});
