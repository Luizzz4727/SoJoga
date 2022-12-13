import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

const api = axios.create({
  baseURL: "http://192.168.0.20:8000/api",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

// const token = await AsyncStorage.getItem('@token')

// const getData = async () => {
//   try {
//     const token = await AsyncStorage.getItem('@token')
//     console.error(token)
//   } catch(e) {
//     // error reading value
//   }
// }

// console.error(getData)

// getMyStringValue = async () => {
//   try {
//     return await AsyncStorage.getItem('@token')
//   } catch(e) {
//     // read error
//   }

// }

// api.interceptors.request.use(async config => {
//   // Declaramos um token manualmente para teste.
//   const token = getMyStringValue;

//   console.error(token)

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });




export default api;