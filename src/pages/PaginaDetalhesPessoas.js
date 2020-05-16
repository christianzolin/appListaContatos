import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';
import ListaPessoas from '../compoents/ListaPessoas';

class PaginaDetalhesPessoa extends React.Component {

    render() {
        const { pessoa } = this.props.route.params
        const { first, last } = pessoa.name
        const { large } = pessoa.picture
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: large }}
                    style={styles.avatar}
                />
                <View style={styles.detalhesContainer}>
                    <View style={styles.line}>
                        <Text style={styles.cell}> Email:  </Text>
                        <Text style={styles.cell}> {pessoa.email} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default PaginaDetalhesPessoa;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    avatar: {
        aspectRatio: 1,
    },
    detalhesContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: 'black'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
    }
})
