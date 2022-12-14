import React, {useState, useEffect, useCallback} from 'react'; 
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../services/api";
import getGameGroupImage from '../../utils/gameGroupImage';

export default function Home() {

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

  let [jogos, setJogos] = useState([]);
  let [txtPesquisa, setTxtPesquisa] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);

  const handleGoToSearchGame = useCallback((searchString)=>{
    navigation.navigate('ResultadoPesquisa', {searchString} );

  },[])

  useEffect(() => {

    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem('@token')

        if(!token){
          navigation.navigate('Login')
        }
        api
        .get("/games", {
        })
        .then(function (response) {
          // Alert.alert('aaaaa', JSON.stringify(response.data.data))
          // if (!isLoaded){
            setJogos(function(lastValue){
              return [...response.data.data]
            })
            // setIsLoaded(true)
          // }
          
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


    console.log('rodou')
    
  }, []);

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
        style={styles.imgFundo}>
        <View style={styles.topoHome}>
          <View>
            <Text style={styles.textTopoHome}>Olá,</Text>
            <Text style={styles.textHome}>Bora encontrar alguém para jogar?</Text>
          </View>
          <View style={styles.viewPesquisar}>
          <TextInput 
              style={styles.input} 
              autoCapitalize="characters" 
              autoCorrect={false} 
              onChangeText={setTxtPesquisa}
          /> 
          <RectButton style={styles.buttonInput} onPress={()=>{handleGoToSearchGame(txtPesquisa)}}> 
                <Image style={styles.imgLupa} source={require('../../assets/images/lupa.png')} />
            </RectButton>
          </View>
        </View>
        <View style={styles.bodyHome}>
        <Text style={styles.txtTitulo}>Recomendações</Text>
        <View style={styles.bodyRecomendacao}>
          <ScrollView>

          {jogos.map(function(item){
            return (
              <RectButton style={styles.boxJogo} key={`jogos-${item.id}`} onPress={()=>{handleGoToSearchGame(item.name)}}>
                <Image style={styles.imgBoxJogo} source={getGameGroupImage(item.name)} />
                <Text style={styles.txtBoxJogo}>{item.name}</Text>
              </RectButton>
            )
          })}
            
          
          </ScrollView>
        </View>
        <View style={styles.menu}>
          <RectButton style={styles.btnMenu}  onPress={handleNavigationToHome}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/home-ativo.png')}/>
          </RectButton> 
          <RectButton style={styles.btnMenu} onPress={handleNavigationToChat}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/chat.png')}/>
          </RectButton> 
          <RectButton style={styles.btnMenu} onPress={handleNavigationToHomeNotificacao}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/notificacao.png')}/>
          </RectButton> 
          <RectButton style={styles.btnMenu} onPress={handleNavigationToPerfil}> 
            <Image style={styles.imgMenu} source={require('../../assets/images/perfil.png')}/>
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
    width:300,
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

  topoHome: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 60
  },

  txtTitulo: {
    color: '#474747',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },

  bodyHome: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 550,
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

  selectJogo:{
    width:'90%',
    marginTop:20
  },

  SelecionarJogo:{
    width:'90%',
    alignItems:'center'
  },

  textTopoHome:{
    color:'#FFF',
    fontSize:40,
    fontWeight:'bold'
  },

  textHome:{
    color:'#FFF',
    fontSize:19,
    fontWeight:'bold'
  },

  viewPesquisar:{
    display:'flex',
    justifyContent:'space-around',
    width:350,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#FFF',
    border: '1px solid black',
    borderRadius: 10, 
    marginTop:27,
  },

  bodyRecomendacao:{
    display:'flex',
    alignItems:'center',
    height:430,
    width:'90%'
  },

  boxJogo:{
    width:350,
    height:200,
    borderRadius:20,
    position:'relative',
    marginBottom:15,
    marginTop:5
  },

  imgBoxJogo:{
    width: 350,
    height:200,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius:20
  },

  txtBoxJogo:{
    position: 'absolute',
    bottom:0,
    width:'100%',
    height:40,
    backgroundColor:'#3956FF',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingTop:10,
    textAlign: 'center',
    overflow:'hidden',
    color:'#FFF',
    fontWeight:'bold',
    fontSize:18,
    opacity:0.9,
  }
});
