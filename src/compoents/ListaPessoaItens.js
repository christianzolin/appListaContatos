import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ListaPessoaItens = props => {
    const { pessoa } = props;
    const { first, last } = pessoa.name
    return (
        <View style={styles.line}>
            <Text style={styles.lineText}> {`${first} ${last} `}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 1,
    }
})
export default ListaPessoaItens;