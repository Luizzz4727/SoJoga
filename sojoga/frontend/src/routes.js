import{NavigationContainer} from '@react-navigation/native'; 
import{createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login'; 
import Register from './pages/Register'; 
import Perfil from './pages/Perfil'; 
import Home from './pages/Home'; 
import AdicionarJogo from './pages/AdicionarJogo'; 
import ResultadoPesquisa from './pages/ResultadoPesquisa'; 
import ParticiparGrupo from './pages/ParticiparGrupo'; 
import DadosGrupo from './pages/DadosGrupo'; 
import Partidas from './pages/Partidas'; 
import FormPartidas from './pages/FormPartidas'; 
import Chat from './pages/Chat'; 
import FormGrupos from './pages/FormGrupos'; 
import Banir from './pages/Banir'; 
import Notificacao from './pages/Notificacao'; 
import PerfilJogador from './pages/PerfilJogador'; 
import PerfilADM from './pages/PerfilADM'; 
import CadastrarJogo from './pages/CadastrarJogo'; 
import TesteAPI from './pages/TesteAPI'; 
import EditarPerfil from './pages/EditarPerfil'; 

const AppStack = createStackNavigator(); 

 

export default function Routes(){ 

    return( 
        
        <NavigationContainer> 

            <AppStack.Navigator initialRouteName='Login' screenOptions={{ 

                cardStyle:{backgroundColor: '#F0F0F5'},
                headerShown: false 

            }}> 
                <AppStack.Screen name="Perfil" component={Perfil}/> 
                <AppStack.Screen name="Login" component={Login}/> 
                <AppStack.Screen name="Register" component={Register}/> 
                <AppStack.Screen name="AdicionarJogo" component={AdicionarJogo}/> 
                <AppStack.Screen name="ResultadoPesquisa" component={ResultadoPesquisa}/> 
                <AppStack.Screen name="ParticiparGrupo" component={ParticiparGrupo}/> 
                <AppStack.Screen name="DadosGrupo" component={DadosGrupo}/> 
                <AppStack.Screen name="Partidas" component={Partidas}/> 
                <AppStack.Screen name="FormPartidas" component={FormPartidas}/> 
                <AppStack.Screen name="FormGrupos" component={FormGrupos}/> 
                <AppStack.Screen name="Chat" component={Chat}/> 
                <AppStack.Screen name="Home" component={Home}/> 
                <AppStack.Screen name="Banir" component={Banir}/> 
                <AppStack.Screen name="Notificacao" component={Notificacao}/>
                <AppStack.Screen name="PerfilJogador" component={PerfilJogador}/> 
                <AppStack.Screen name="PerfilADM" component={PerfilADM}/>
                <AppStack.Screen name="CadastrarJogo" component={CadastrarJogo}/>
                <AppStack.Screen name="TesteAPI" component={TesteAPI}/>
                <AppStack.Screen name="EditarPerfil" component={EditarPerfil}/>


            </AppStack.Navigator> 

        </NavigationContainer> 

); 

} 