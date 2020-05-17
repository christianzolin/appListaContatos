import React from 'react';
import ListaPessoas from '../compoents/ListaPessoas'
import { ActivityIndicator, View, Alert, Text} from 'react-native';
import axios from 'axios'

class PaginaPessoa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pessoas: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        setTimeout(() => {
            axios.get('https://randomuser.me/api/?nat=br&results=25')
                .then(resultado => {
                    const { results } = resultado.data
                    this.setState({ pessoas: results, loading: false })
                })
                .catch(erro => {
                    this.setState({ loading: false, error: true })
                })
        }, 2500);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {
                    this.state.loading
                        ? <ActivityIndicator size='large' color='purple' />
                        : this.state.error
                            ? <Text style={{color: 'red', alignSelf:'center'}}>Ops... algo deu errado =( </Text>
                            : <ListaPessoas
                                pessoas={this.state.pessoas}
                                onPress={(pageParms) => {
                                    this.props.navigation.navigate('Detalhes', pageParms)
                                }}
                            />
                }
            </View>)
    }
}

export default PaginaPessoa;