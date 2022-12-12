import { View, Button, Image, ImageBackground, StyleSheet, Text, TextInput, Alert, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import SelectList from 'react-native-dropdown-select-list';


export default function FormGrupos() {

  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'Fortnite' },
    { key: '2', value: 'League of Legends' },
    { key: '3', value: 'Valorrant' },
  ];

  const navigation = useNavigation();

  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  function handleNavigationToPerfil() {
    navigation.navigate('Perfil');
  }

  const [image, setImage] = useState(null);

  const uri = image?.uri;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri);
    setImage(result.uri);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <View style={styles.container}>

      <ImageBackground source={require('../../assets/images/fundo-login.png')}
        style={styles.imgFundo}>
        <View style={styles.bodyPartGrupo}>

          <View style={styles.topoPartidas}>
            <Text style={styles.tituloDados}>Criar Grupo</Text>
          </View>
          <View style={styles.rolagemPartidas}>

            <View style={styles.selectGrupo}>
              <Text style={styles.tituloDados}>Nome do Grupo:</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="characters"
                autoCorrect={false}
              />
            </View>

            <View style={styles.selectJogo}>
              <Text style={styles.tituloDados}>Selecione o Jogo:</Text>
              <SelectList style={styles.slctJogos} setSelected={setSelected} data={data} />
            </View>

            


          <View style={styles.selectImage}>
            <Text style={styles.tituloDados}>Foto do Grupo:</Text>
            <View style={styles.boxIMG}>
              <Button title="Escolher Imagem" onPress={pickImage} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 100, margin: 10, }} />}

            </View>
          </View>
          </View>
          <View style={styles.btnGrupo}>
            <RectButton style={styles.buttonGrupo} >
              <Text style={styles.buttonText}>Criar Grupo</Text>
            </RectButton>
          </View>

          <View style={styles.menu}>
            <RectButton style={styles.btnMenu} onPress={handleNavigationToHome}>
              <Image style={styles.imgMenu} source={require('../../assets/images/home.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/chat-ativo.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={require('../../assets/images/notificacao.png')} />
            </RectButton>
            <RectButton style={styles.btnMenu} onPress={handleNavigationToPerfil}>
              <Image style={styles.imgMenu} source={require('../../assets/images/perfil.png')} />
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
    color: '#474747',
    fontSize: 25,
    fontWeight: 'bold'
  },

  tituloDados: {
    color: '#474747',
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%'
  },

  tituloPartidas: {
    color: '#3956FF',
    fontSize: 22,
    fontWeight: 'bold'
  },

  topoPartidas: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 50,
  },

  imgPartidas: {
    width: 120,
    height: 120,
    borderRadius: 110,
  },

  txtTitulo: {
    color: '#3956FF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },

  bodyPartGrupo: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    marginTop: 60,
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 60
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
      width: 0,
      height: 18,
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


  rolagemPartidas: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  PartidasMarcadas: {
    backgroundColor: '#3956FF',
    width: '99%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    paddingLeft: 20,
    paddingRight: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 4,
  },

  gp: {
    width: '90%',
    margin: 10
  },

  imgGrupo: {
    height: 70,
    width: 70,
    borderRadius: 70,
    marginLeft: 15,
    marginRight: 15
  },

  gpTxt: {
    display: 'flex',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  txtGrupos: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 50
  },

  tituloGrupo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3956FF'
  },

  buttonGrupo: {
    width: 210,
    height: 40,
    backgroundColor: '#3956FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 4,
    fontSize: 16,
  },

  btnGrupo: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
  },

  cardPartida: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#FFF',
    padding: 10
  },

  txtData: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  txtHora: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  txtDesc: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  descricao: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10
  },

  input: {
    width: 320,
    height: 45,
    backgroundColor: '#FFF',
    border: '1px solid black',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1
  },

  inputDesc: {
    width: 320,
    height: 200,
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 8,
    fontSize: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.00,
    elevation: 4,
    alignItems: 'flex-start'
  },

  boxIMG: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  selectJogo: {
    width: 320,
    marginTop: 10,
    marginBottom:30
  },

  selectGrupo: {
    width: 320,
    marginTop: 0,
    marginBottom:10
  },

  slctJogos: {
    borderColor: '#FFF'
  },

  selectImage:{
    width: 320,
    height:200
  }


});
