import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 

export default function PerfilADM() {

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


  function handleNavigationToCadastrarJogo() {
    navigation.navigate('CadastrarJogo');
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <View style={styles.topoPerfil}>
          <Image style={styles.imgPerfil} source={require('../../assets/images/ADM.png')}/>
          <Text style={styles.titulo}>ADM</Text>
          <RectButton style={styles.button} > 
            <Text style={styles.buttonText}>Editar</Text> 
          </RectButton> 
        </View>
        <View style={styles.bodyPerfil}>
        <Text style={styles.txtTitulo}>Administrador</Text>

        <View style={styles.btnjogo}>
        <RectButton style={styles.buttonJogo} onPress={handleNavigationToCadastrarJogo}> 
            <Text style={styles.buttonText}>Cadastrar Novo Jogo</Text> 
          </RectButton> 
          
        <RectButton style={styles.buttonSair}> 
            <Text style={styles.buttonText}>Sair</Text> 
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
    width:230,
    height: 45, 
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
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'90%',
  },

  rolagemGrupos:{
    width:'100%',
    height:130,
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
