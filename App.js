import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ViewingScreen from './src/screens/ViewingScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Listar Projetos' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Cadastrar Projetos' }} 
        />
        <Stack.Screen 
          name="Edit" 
          component={EditScreen} 
          options={{ title: 'Editar Projetos' }}/>
        <Stack.Screen 
          name="Viewing" 
          component={ViewingScreen} 
          options={{ title: 'Visualizar Projetos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#3F51B5'
  },
  headerTintColor: '#fff',
  headerTitleAlign: "center"
}
