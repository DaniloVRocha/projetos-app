import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import api from '../services/api';
import Button from '../components/Button';
import Header from '../components/Header';




export default function RegisterScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0);
    const [acoes, setAcoes] = useState('');
    const [referencias, setReferencias] = useState('');
    function enviar() {
        const data = {
            nome,
            descricao,
            valor,
            acoes,
            referencias
        }

        console.log(data);


        api.post("/projetos", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <View style={styles.container}>
            <Header style={styles.header} name="CADASTRAR"></Header>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDescricao}
                value={descricao}
                placeholder="Descrição"
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={setValor}
                value={valor}
                placeholder="Valor"
                keyboardType="number"
            />
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Ações</Text>
            <TextInput
                style={styles.textArea}
                value={acoes}
                onChangeText={setAcoes}
                underlineColorAndroid="transparent"
                placeholder="Insira uma referência por linha"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Referências</Text>
            <TextInput
                style={styles.textArea}
                value={referencias}
                onChangeText={setReferencias}
                underlineColorAndroid="transparent"
                placeholder="Insira uma referência por linha"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
            <TouchableOpacity style={[styles.butoa, styles.buttonPlus]}
                onPress={() => {
                    enviar();
                    navigation.navigate('Home')
                }}>
                <Icon name='check' style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    butoa: {
        backgroundColor: "#3F51B5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 28,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 2,
        minWidth: 40,
        minHeight: 40
    },
    container: {
        flex: 1
    },
    header: {
        height: 76,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonPlus: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    textArea: {
        borderColor: '#000000',
        borderWidth: 1,
        padding: 5,
        height: 150,
        justifyContent: "flex-start",
        margin: 12
    },
    icon: {
        color: "#fff",
        fontSize: 24,
        alignSelf: "center"
    }
});