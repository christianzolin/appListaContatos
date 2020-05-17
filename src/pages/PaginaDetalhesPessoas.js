import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import Line from '../compoents/line'
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
                    <Line label={'E-mail'} content={pessoa.email} />
                    <Line label={'Cidade'} content={pessoa.location.city} />
                    <Line label={'Estado'} content={pessoa.location.state} />
                    <Line label={'Cel'} content={pessoa.cell} />
                    <Line label={'Nacionalidade'} content={pessoa.nat} />
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
        aspectRatio: 1
    },
    detalhesContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1,
        padding: 1
    },

})
