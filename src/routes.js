import{NavigationContainer} from '@react-navigation/native'; 
import{createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login'; 
import Register from './pages/Register'; 


const AppStack = createStackNavigator(); 

 

export default function Routes(){ 

    return( 
        
        <NavigationContainer> 

            <AppStack.Navigator headerMode="none" initialRouteName='Login' screenOptions={{ 

                cardStyle:{backgroundColor: '#F0F0F5'} 

            }}> 

                <AppStack.Screen name="Login" component={Login}/> 
                <AppStack.Screen name="Register" component={Register}/> 

            </AppStack.Navigator> 

        </NavigationContainer> 

); 

} 