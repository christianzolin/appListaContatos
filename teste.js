import 'react-native-gesture-handler'
import * as React from 'react'
import {Text, View, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
function HomeScreen({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Vá para details"
        onPress={() => navigation.navigate('Details',{ nome: { nome,}})}
      />
    </View>
  )
}
function DetailScreen({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details SCreen{route.nome.nome}</Text>
      <Button
        title="Vá para home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
const Stack = createStackNavigator()  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App