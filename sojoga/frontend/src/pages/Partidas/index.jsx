import { StatusBar } from 'expo-status-bar';
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView} from 'react-native'; 
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 

export default function Partidas() {

  const navigation = useNavigation(); 


  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  function handleNavigationToPerfil() {
    navigation.navigate('Perfil');
  }
  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
       style={styles.imgFundo}>
        <View style={styles.bodyPartGrupo}>

        <View style={styles.topoPartidas}>
          <Text style={styles.tituloDados}>Partidas</Text>
        </View>

        
        <Text style={styles.txtTitulo}>Partidas Marcadas:</Text>
        <View style={styles.rolagemPartidas}>
        <ScrollView  style={styles.gp}>
          <View  style={styles.PartidasMarcadas}>
            <View style={styles.cardPartida}>
              <View style={styles.data}>
                <Text style={styles.txtData}>Data:</Text>
                <Text style={styles.txtData}>30/11/2022</Text>
              </View>
              <View style={styles.hora}>
                <Text style={styles.txtHora}>Horário:</Text>
                <Text style={styles.txtHora}>22:15</Text>
              </View>
            </View>
            <View style={styles.descricao}>
            <Text style={styles.txtDesc}>Descrição</Text>
            <Text style={styles.txtDesc}>Partida no modo construção.</Text>
            </View>
          </View>
          <View  style={styles.PartidasMarcadas}>
            <View style={styles.cardPartida}>
              <View style={styles.data}>
                <Text style={styles.txtData}>Data:</Text>
                <Text style={styles.txtData}>30/11/2022</Text>
              </View>
              <View style={styles.hora}>
                <Text style={styles.txtHora}>Horário:</Text>
                <Text style={styles.txtHora}>22:15</Text>
              </View>
            </View>
            <View style={styles.descricao}>
            <Text style={styles.txtDesc}>Descrição</Text>
            <Text style={styles.txtDesc}>Partida no modo construção.</Text>
            </View>
          </View>
          <View  style={styles.PartidasMarcadas}>
            <View style={styles.cardPartida}>
              <View style={styles.data}>
                <Text style={styles.txtData}>Data:</Text>
                <Text style={styles.txtData}>30/11/2022</Text>
              </View>
              <View style={styles.hora}>
                <Text style={styles.txtHora}>Horário:</Text>
                <Text style={styles.txtHora}>22:15</Text>
              </View>
            </View>
            <View style={styles.descricao}>
            <Text style={styles.txtDesc}>Descrição</Text>
            <Text style={styles.txtDesc}>Partida no modo construção.</Text>
            </View>
          </View>
          <View  style={styles.PartidasMarcadas}>
            <View style={styles.cardPartida}>
              <View style={styles.data}>
                <Text style={styles.txtData}>Data:</Text>
                <Text style={styles.txtData}>30/11/2022</Text>
              </View>
              <View style={styles.hora}>
                <Text style={styles.txtHora}>Horário:</Text>
                <Text style={styles.txtHora}>22:15</Text>
              </View>
            </View>
            <View style={styles.descricao}>
            <Text style={styles.txtDesc}>Descrição</Text>
            <Text style={styles.txtDesc}>Partida no modo construção.</Text>
            </View>
          </View>
          <View  style={styles.PartidasMarcadas}>
            <View style={styles.cardPartida}>
              <View style={styles.data}>
                <Text style={styles.txtData}>Data:</Text>
                <Text style={styles.txtData}>30/11/2022</Text>
              </View>
              <View style={styles.hora}>
                <Text style={styles.txtHora}>Horário:</Text>
                <Text style={styles.txtHora}>22:15</Text>
              </View>
            </View>
            <View style={styles.descricao}>
            <Text style={styles.txtDesc}>Descrição</Text>
            <Text style={styles.txtDesc}>Partida no modo construção.</Text>
            </View>
          </View>
          <View  style={styles.PartidasMarcadas}>
            <View style={styles.cardPartida}>
              <View style={styles.data}>
                <Text style={styles.txtData}>Data:</Text>
                <Text style={styles.txtData}>30/11/2022</Text>
              </View>
              <View style={styles.hora}>
                <Text style={styles.txtHora}>Horário:</Text>
                <Text style={styles.txtHora}>22:15</Text>
              </View>
            </View>
            <View style={styles.descricao}>
            <Text style={styles.txtDesc}>Descrição</Text>
            <Text style={styles.txtDesc}>Partida no modo construção.</Text>
            </View>
          </View>
        </ScrollView>
        </View>
        <View style={styles.btnGrupo}>
        <RectButton style={styles.buttonGrupo} > 
            <Text style={styles.buttonText}>Marcar nova partida</Text> 
          </RectButton> 
        </View>
        
      <View style={styles.menu}>
        <RectButton style={styles.btnMenu}  onPress={handleNavigationToHome}> 
          <Image style={styles.imgMenu} source={require('../../assets/images/home.png')}/>
        </RectButton> 
        <RectButton style={styles.btnMenu}> 
          <Image style={styles.imgMenu} source={require('../../assets/images/chat-ativo.png')}/>
        </RectButton> 
        <RectButton style={styles.btnMenu}> 
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
    color:'#474747',
    fontSize:25,
    fontWeight:'bold'
  },

  tituloDados:{
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

  topoPartidas:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:10,
    height:50,
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
    marginTop:60,
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
  
  PartidasMarcadas:{
    backgroundColor:'#3956FF',
    width:'99%',
    display:'flex',
    alignItems:'center',
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
    fontSize:20,
    fontWeight:'bold',
    color:'#3956FF'
  }, 
  
  buttonGrupo:{
    width:210,
    height: 40, 
    backgroundColor: '#3956FF', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10, 
    marginTop: 4, 
    fontSize: 16, 
  },

  btnGrupo:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    width:'90%',
  },

  cardPartida:{
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%',
    flexDirection:'row',
    borderBottomWidth:2,
    borderColor:'#FFF',
    padding:10
  },

  txtData:{
    color:'#FFF',
    fontWeight:'bold'
  },

  txtHora:{
    color:'#FFF',
    fontWeight:'bold'
  },

  txtDesc:{
    color:'#FFF',
    fontWeight:'bold'
  },

  descricao:{
    display:'flex',
    justifyContent:'flex-start',
    width:'100%',
    padding:10
  }


});
