import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ListaPessoaItens = props => {
    const { pessoa, onPress } = props;
    const { first, last } = pessoa.name
    const { thumbnail  } = pessoa.picture
    
    return (
        <TouchableOpacity onPress={() =>{ onPress({pessoa})}}>
            <View style={styles.line}>
                <Image source={{ uri: thumbnail }} style={styles.avatar} />
                <Text style={styles.lineText}> {`${first} ${last} `}</Text>
            </View>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 7,
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 5,
        borderRadius: 50
    }
})
export default ListaPessoaItens;