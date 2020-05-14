import React from 'react';
import Header from './src/compoents/Header';
import ListaPessoas from './src/compoents/ListaPessoas'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios'
// https://randomuser.me/api/?mat=br&results=5

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pessoas: []
    }
  }
  
  componentDidMount() {
    axios.get('https://randomuser.me/api/?nat=br&results=10')
      .then(resultado => {
        const { results } = resultado.data
        this.setState({ pessoas: results })
      })
  }
  render() {
    return (
      <View>
        <Header title='Pessoas' />
        <ListaPessoas pessoa={this.state.pessoas}/>
      </View>)
  }
}



export default App;
