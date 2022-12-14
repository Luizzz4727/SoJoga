import React, {useEffect, useState, useCallback} from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView } from 'react-native';
import { Dimensions, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import GruposRoute from './components/GruposRoute';


export default function ResultadoPesquisa() {

  const [groups, setGroups] = useState([])

  const { params } = useRoute();
  const {searchString} = params;
  let [txtPesquisa, setTxtPesquisa] = useState([]);

  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);

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

  
  const handleGoToSearchGame = useCallback((searchString)=>{
    navigation.navigate('ResultadoPesquisa', {searchString} );

  },[])

  
  const handleNavigateToJogador = (idJogador)=>{
    navigation.navigate('PerfilJogador',{idJogador});
}
  

  const [jogadores, setJogadores] = useState([])
  const JogadoresRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#FFF' }]}>
      <View style={styles.rolagemGrupos}>
        <ScrollView style={styles.gp}>
          
        {jogadores.map(function(item, index){
              return (
            <RectButton style={styles.grupos} key={index} onPress={()=>{
              handleNavigateToJogador(item.id)
          }}>
              <Image style={styles.imgGrupo} source={require('../../assets/images/gwen.png')} />
              <View style={styles.txtJogador}>
                <Text style={styles.tituloGrupo}>{item.username}</Text>
                <Text style={styles.tituloJogo}>Jogador de {item.games}</Text>
              </View>
            </RectButton>
                )
            })}
  
        </ScrollView>
      </View>
    </View>
  );

  const state = {
    index: 0,
    routes: [
      { key: 'Grupos', title: 'Grupos' },
      { key: 'Jogadores', title: 'Jogadores' },
    ],
  };

  useEffect(()=>{

    

    if(searchString){
      api.get(`/search?search=${searchString}`).then((response)=>{
        console.log('aaaaaa', response.data.data.groups)
        setGroups([...response.data.data.groups])
      })
    }else{
      console.log('Sem nada na Busca')
    }

  },[params])


  useEffect(()=>{
    if(searchString){
      api.get(`/search?search=${searchString}`).then((response)=>{
        setJogadores([...response.data.data.players])
      })
    }else{
      console.log('Sem nada na Busca')
    }

  },[params])

  useEffect(()=>{
    console.log('teste',groups)
  },[groups])

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
        style={styles.imgFundo}>
        <View style={styles.topoPesquisa}>
          <View>
            <View style={styles.viewPesquisar}>

              <TextInput
                style={styles.input}
                autoCapitalize="characters"
                autoCorrect={false}
                onChangeText={setTxtPesquisa}
              />
              <RectButton style={styles.buttonInput}  onPress={()=>{handleGoToSearchGame(txtPesquisa)}}>
                <Image style={styles.imgLupa} source={require('../../assets/images/lupa.png')} />
              </RectButton>
            </View>
          </View>
        </View>
        <View style={styles.bodyPesquisa}>
        <View style={styles.topoTitulo}>
          {
            searchString && (
              <Text style={styles.tituloDados}>Resultados para "{searchString}"</Text>
            )
          }
         
          </View>
          <TabView
            navigationState={state}
            renderScene={SceneMap({
              Grupos: ()=>(<GruposRoute groups={groups}/>),
              Jogadores:  JogadoresRoute,
            })}
            onIndexChange={index => setIndex(index)}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.map}
            renderTabBar={props => <TabBar {...props} style={{ backgroundColor: '#1261FF', color: '#000' }} />}
          />

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
    width: 300,
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

  buttonTextBlack: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#474747'
  },

  imgFundo: {
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

  topoPesquisa: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },

  txtTitulo: {
    color: '#474747',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },

  bodyPesquisa: {
    backgroundColor: '#FFF',
    width: '100%',
    height: 660,
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

  selectJogo: {
    width: '90%',
    marginTop: 20
  },

  SelecionarJogo: {
    width: '90%',
    alignItems: 'center'
  },

  texttopoPesquisa: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold'
  },

  textHome: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold'
  },

  viewPesquisar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 350,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    border: '1px solid black',
    borderRadius: 10,
    marginTop: 27,
  },

  bodyRecomendacao: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  boxJogo: {
    width: 350,
    borderRadius: 20,
    position: 'relative',
    marginBottom: 15,
    marginTop: 5
  },

  imgBoxJogo: {
    width: '100%',
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  txtBoxTopoJogo: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    textAlign: 'center',
    overflow: 'hidden',
    color: '#3956FF',
    fontWeight: 'bold',
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
  },

  txtBoxJogo: {
    width: '100%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 5,
    textAlign: 'center',
    overflow: 'hidden',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
  },

  txtDataBox: {
    width: '60%',
    paddingLeft: 15
  },

  txtBoxFimJogo: {
    width: '40%',
    paddingLeft: 15
  },

  map: {
    width: '100%'
  },
  scene: {
    flex: 1
  },

  
  rolagemGrupos:{
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  
  grupos:{
    height:90,
    backgroundColor:'#DCE4FF',
    width:'99%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20,
    marginBottom:20,
  },

  gp:{
    width:'90%',
    margin:10
  },

  imgGrupo:{
    height:70,
    width:70,
    borderRadius:10,
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
    color:'#052199'
  }, 

  txtJogador:{
    display:'flex',
    flexDirection:'column',
  },

  tituloDados:{
    color:'#474747',
    fontSize:20,
    fontWeight:'bold',
    width:'100%',
    alignItems:'center'
  },

  topoTitulo:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },

  tituloJogo:{
    fontSize:14,
    color:'#474747'
  }
});
