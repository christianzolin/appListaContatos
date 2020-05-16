import React from 'react'
import { View, StyleSheet } from 'react-native'
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
        <View style={styles.container}>
            {itens}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',
    }
})

export default ListaPessoas;