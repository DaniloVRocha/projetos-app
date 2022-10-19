import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useState } from "react";
import api from '../services/api';
import Button from '../components/Button';
import Header from '../components/Header';
import List from '../components/List';

export default function ViewingScreen({ navigation, route }) {
    const [projeto = {nome:"", descricao:"", valor:0, acoes:"", referencias:""}, setProjeto] = useState();

    useEffect(() => {
        api.get(`/projetos/${route.params.id}`)
            .then((res) => setProjeto(res.data))
            .catch((err) => {
                console.error("Erro ao consultar API, " + err);
            });
    });

    return (
        <View style={styles.container}>
            <Header style={styles.header} name={projeto.nome} ></Header>
            <Text style={styles.textTitle}>Descrição: {'\n'}{projeto.descricao}</Text>
            <Text style={styles.textTitle}>Valor: R$ {projeto.valor}</Text>
            <Text style={styles.textTitle}>Ações: {'\n'}{projeto.acoes}</Text>
            <Text style={styles.textTitle}>Referências: {'\n'}{projeto.referencias}</Text>
            <Button style={styles.buttonPlus} icon='pencil'
                nav='Edit' idprojeto={route.params.id} navigation={navigation}></Button>
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
