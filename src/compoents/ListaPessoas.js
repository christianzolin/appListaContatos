import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ListaPessoasItens from './ListaPessoaItens'


const ListaPessoas = props => {

    const { pessoas, onPress } = props;

    const itens = pessoas.map(pessoa => {
        return <ListaPessoasItens
            key={pessoa.name.first}
            pessoa={pessoa}
            onPress={onPress}
        />
    })
    return (
        <FlatList style={styles.container}
            data={pessoas}
            renderItem={({ item }) => (
                <ListaPessoasItens
                    pessoa={item}
                    onPress={onPress} />
            )}
            keyExtractor={item => item.name.first}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',
    }
})

export default ListaPessoas;