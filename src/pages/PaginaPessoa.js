import React from 'react';
import Header from '../compoents/Header';
import ListaPessoas from '../compoents/ListaPessoas'
import { View } from 'react-native';
import axios from 'axios'

class PaginaPessoa extends React.Component {
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
                <ListaPessoas pessoas={this.state.pessoas} />
            </View>)
    }
}



export default PaginaPessoa;