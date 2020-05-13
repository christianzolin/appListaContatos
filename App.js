import React from 'react';
import Header from './src/compoents/Header';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  renderList() {
    const names = [
      'João',
      'Puall',
      'Addade',
      'asdEE',
      'Paulo',
      'Ticket',
    ]
    const textNomes = names.map(nome => {
      return <Text key={nome}> {nome} </Text>
    })
    return textNomes;
  }

  render() {
    return (
      <View>
        <Header title='Pessoas' />
        {this.renderList()}
      </View>)
  }
}


export default App;
