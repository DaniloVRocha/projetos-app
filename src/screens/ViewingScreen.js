import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import api from '../services/api';

export default  props => {

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Descrição: {'\n'}{props.route.params.descricao}</Text>
            <Text style={styles.textTitle}>Valor: R$ {props.route.params.valor}</Text>
            <Text style={styles.textTitle}>Ações: {'\n'}{props.route.params.acoes}</Text>
            <Text style={styles.textTitle}>Referências: {'\n'}{props.route.params.referencias}</Text>
            <Button style={styles.buttonPlus} icon='pencil'
                nav='Edit' projeto={props.route.params} navigation={props.navigation}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 76,
        marginBottom: 15
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin:10
    },
    cardList: {
        marginTop: 20,
        marginLeft: 9,
        marginRight: 8
    },
    buttonPlus: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    }
});
