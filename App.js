import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ViewingScreen from './src/screens/ViewingScreen';
import EditScreen from './src/screens/EditScreen';
import LixeiraScreen from './src/screens/LixeiraScreen'
import { Button, Icon } from 'react-native-elements';
import Project from './src/services/Project';
import { Alert } from "react-native";

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
          options={({ navigation }) => {
            return {
              title: 'Listar Projetos',
              headerLeft: () => (
                <Button
                  onPress={() => navigation.navigate('Lixeira')}
                  type="clear"
                  icon={<Icon name="delete" size={25} color="red" />}
                />
              )
            }
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Cadastrar Projetos' }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: 'Editar Projetos' }} />
        <Stack.Screen
          name="Viewing"
          component={ViewingScreen}
          options={{ title: 'Visualizar Projetos' }}
        />
        <Stack.Screen
          name="Lixeira"
          component={LixeiraScreen}
          options={() => {
            return{
              title: 'Lixeira',
              headerRight: () => (
                <Button
                  onPress={() => {
                    Alert.alert('Deseja Esvaziar Lixeira?', 'A Ação não pode ser desfeita',[
                      {
                          text: 'Sim',
                          onPress() {
                            Project.removeAll().then(Alert.alert("Lixeira Esvaziada com sucesso."))
                          }
                      },
                      {
                          text: 'Não'
                      }])
                  }}
                  type="solid"
                  title="Esvaziar"
                  size = {25}
                  color="red"
                />
              )
            }
          }}
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
