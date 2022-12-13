import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; 
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView  } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../services/api";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function AdicionarJogo() {

  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  function handleNavigationToPerfil() {
    navigation.navigate('Perfil');
  }
  const [selected, setSelected] = React.useState("");
  let [user, setUser] = useState();
  let [jogos, setJogos] = useState([]);
  

  useEffect(() => {

    const getUsuario = async () => {
      try {
        const token = await AsyncStorage.getItem('@token')
        api
        .get("/get/user", {
          headers: {
            'Authorization': `${token}`
          }
        })
        .then(function (response) {
          // Alert.alert("a", JSON.stringify(response.data.user))
          setUser(response.data.user)
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

    
    const getJogos = async () => {
      try {
        const token = await AsyncStorage.getItem('@token')
        api
        .get("/games/user", {
          headers: {
            'Authorization': `${token}`
          }
        })
        .then(function (response) {
          // Alert.alert('aaaaa', JSON.stringify(response.data.data))
            setJogos(function(lastValue){
              return [...response.data.data]
            })
        }
        )
        .catch((err) => {
          console.error(err.response)
        });

      } catch(e) {
        console.error(e)
      }
    }


    getUsuario()
    getJogos()
    
  }, []);

  
  async function AdicionarJogo(){

    const token = await AsyncStorage.getItem('@token')
    
    api.post('/games/user', { 
      game_id: selected
    }, {
          headers: {
            'Authorization': `${token}`
          }
        }) 
    .then(function (response) { 
        showMessage({
          message: "Jogo Adicionado!",
          type: "Success",
        });
  
        handleNavigationToPerfil()
    }) 
    .catch(error => {
      
        showMessage({
          message: "Alerta: ",
          description: error.response.data.message,
          type: "danger",
        });
    });
    }




  var data = jogos.map(function(item){
      return {key:item.id, value:item.name};
  })

  return (
    <View style={styles.container}>
      <FlashMessage position = "bottom"/> 
      <ImageBackground source={require('../../assets/images/fundo-login.png')}
        style={styles.imgFundo}>
        <View style={styles.topoAdcJogos}>
          <Image style={styles.imgAdcJogos} source={require('../../assets/images/gwen.png')} />
          {/* <Text style={styles.titulo}>{user.username}</Text> */}
        </View>
        <View style={styles.bodyAdcJogos}>
        <View style={styles.SelecionarJogo}>
        <Text style={styles.txtTitulo}>Seleção de Jogos</Text>
        <View style={styles.selectJogo}>
            <Text style={styles.txtTituloAdc}>Selecione o Jogo:</Text>
            <SelectList style={styles.slctJogos} setSelected={setSelected} data={data} />
        </View>
        </View>

        <View style={styles.btnjogo}>
        <RectButton style={styles.buttonJogo} onPress={AdicionarJogo}> 
            <Text style={styles.buttonText}>Adicionar Jogo</Text> 
          </RectButton> 
          <RectButton style={styles.buttonVoltar} > 
            <Text style={styles.buttonTextBlack}>Voltar</Text> 
          </RectButton> 
        </View>


          <View style={styles.menu}>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/home.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/chat.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/notificacao.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/perfil-ativo.png')} />
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
    marginTop: 5
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

});
