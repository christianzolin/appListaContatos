import React from 'react';
import Header from '../compoents/Header';
import ListaPessoas from '../compoents/ListaPessoas'
import { View } from 'react-native';
import axios from 'axios'

class PaginaPessoa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pessoas: [],
            nome: ''
        }
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?nat=br&results=10')
            .then(resultado => {
                const { results } = resultado.data
                this.setState({ pessoas: results })
            })
            .catch(erro => { console.log('erro', erro)})
    }
    render() { 
        return (
            <View>
                <ListaPessoas
                    pessoas={this.state.pessoas}
                    onPress={(pageParms) => {
                        this.props.navigation.navigate('Detalhes',pageParms)
                    }}
                />
            </View>)
    }
}

export default PaginaPessoa;