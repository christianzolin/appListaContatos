import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PaginaPessoa from './src/pages/PaginaPessoa'
import PaginaDetalhePessoas from './src/pages/PaginaDetalhesPessoas'

const Stack = createStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pessoas" >
        <Stack.Screen
          name="Pessoas"
          component={PaginaPessoa}
          options={({ navigation }) => {

            return ({
              title: 'Pessoa',
              headerTintColor: 'red',
              headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: 'black'
              },
              headerTitleStyle: {
                alignSelf: 'center',
                color: 'white',
                fontSize: 20,
              },
            }
            )
          }
          }
        // headerLeft: () => (
        //   <DrawerButton onPress={() => navigation.toggleDrawer()} />
        // ),
        // options={{
        //   title: 'Pessoas',
        //   headerTintColor: 'red',
        //   headerStyle: {
        //     backgroundColor: '#6ca2f7',
        //     borderBottomWidth: 1,
        //     borderBottomColor: 'black'
        //   },
        //   headerTitleStyle: {
        //     alignSelf: 'center',
        //     color: 'white',
        //     fontSize: 30,
        // }
        // }} 
        />
        <Stack.Screen
          name="Detalhes"
          component={PaginaDetalhePessoas}
          options={({ navigation }) => {

            return ({
              title: 'Detalhes da Pessoa',
              headerTintColor: 'black',
              headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: 'black'
              },
              headerTitleStyle: {
                alignSelf: 'center',
                color: 'white',
                fontSize: 30,
              },
            }
            )
          }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = {
  navigator: {
    title: 'Pessoas',
    headerTintColor: 'red',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: 'black'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
    }
  }
}
  // https://randomuser.me/api/?mat=br&results=
