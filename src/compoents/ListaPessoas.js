import React from 'react'
import { View, Text } from 'react-native'

const ListaPessoas = props => {
    const { pessoa } = props;
    const listaPessoas = pessoa.map(pessoa => {
        const { first } = pessoa.name;
        return <Text key={first}> {first}</Text>
    })
    return (
        <View>
            {listaPessoas}
        </View>
    )
}

export default ListaPessoas;