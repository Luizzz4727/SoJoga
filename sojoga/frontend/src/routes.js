import{NavigationContainer} from '@react-navigation/native'; 
import{createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Perfil from './pages/Perfil'; 
import Home from './pages/Home'; 
import AdicionarJogo from './pages/AdicionarJogo'; 


const AppStack = createStackNavigator(); 

 

export default function Routes(){ 

    return( 
        
        <NavigationContainer> 

            <AppStack.Navigator initialRouteName='Home' screenOptions={{ 

                cardStyle:{backgroundColor: '#F0F0F5'},
                headerShown: false 

            }}> 
                <AppStack.Screen name="Perfil" component={Perfil}/> 
                <AppStack.Screen name="Login" component={Login}/> 
                <AppStack.Screen name="Register" component={Register}/> 
                <AppStack.Screen name="AdicionarJogo" component={AdicionarJogo}/> 
                <AppStack.Screen name="Home" component={Home}/> 

            </AppStack.Navigator> 

        </NavigationContainer> 

); 

} 