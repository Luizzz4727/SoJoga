import React, { useEffect, useState } from "react";
import {View, Image, ImageBackground, StyleSheet, Text, TextInput, Alert} from 'react-native'; 
import api from "../../services/api";
import {useNavigation} from '@react-navigation/native'; 

export default function TesteAPI() {
  const [user, setUser] = useState();

  const navigation = useNavigation(); 

  useEffect(() => {
    api
      .get("/users/romulo27")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <View>
      <Text>Usuário: {user?.login}</Text>
      <Text>Biografia: {user?.bio}</Text>
    </View>
  );
}