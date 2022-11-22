import React, { useState } from "react";
import { Keyboard } from "react-native";
import { Alert } from "react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import api from '../services/api';
import Project from '../services/Project'

export default props => {

    //getData iria dentro do useState 
    const [projeto, setProjeto] = useState({})

    // const getData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('projeto')
    //       if(value !== null) {
    //         return projeto;
    //       }else{
    //         return {};
    //       }
    //     } catch(e) {

    //     }
    //   }

    //   const gravarAsync = async () => {
    //     try{
    //         await AsyncStorage.setItem(`"projeto"`, projeto);
    //         Keyboard.dismiss();
    //         Alert.alert("Sucesso", "Salvo no AsyncStorage")
    //     }catch (e) {

    //     }
    // }

    function enviar() {
        api.post("/projetos", projeto)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    function salvarSQLITE() {
        Project.create({ nome: "Projeto SQLITE", descricao: "Usando SQLITE pela primeira vez", valor: "29.99", acoes: "CRUD COMPLETO", referencias: "Wikipedia" })
            .then(id => console.log("Projeto Inserido com id: " + id))
            .catch(error => console.log(error))
    }

    function getAllSQLITE(){
        Project.getAll().then(projetos => projetos.forEach(c => console.log(c)))
    }
    return (
        <View style={styles.container}>
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={nome => setProjeto({ ...projeto, nome })}
                value={projeto.nome}
                placeholder="Nome"
                keyboardType="text"
            />
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Descrição</Text>
            <TextInput
                style={styles.input}
                onChangeText={descricao => setProjeto({ ...projeto, descricao })}
                value={projeto.descricao}
                placeholder="Descrição"
                keyboardType="text"
            />
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Valor</Text>
            <TextInput
                style={styles.input}
                onChangeText={valor => setProjeto({ ...projeto, valor })}
                value={projeto.valor}
                placeholder="Valor"
                keyboardType="number"
            />
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Ações</Text>
            <TextInput
                style={styles.textArea}
                onChangeText={acoes => setProjeto({ ...projeto, acoes })}
                value={projeto.acoes}
                underlineColorAndroid="transparent"
                placeholder="Insira uma referência por linha"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
            <Text style={{ margin: 12, fontSize: 15, fontWeight: "bold" }}>Referências</Text>
            <TextInput
                style={styles.textArea}
                onChangeText={referencias => setProjeto({ ...projeto, referencias })}
                value={projeto.referencias}
                underlineColorAndroid="transparent"
                placeholder="Insira uma referência por linha"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />

            <TouchableOpacity style={[styles.butoa, styles.buttonPlus]}
                onPress={() => {
                    enviar();
                    getAllSQLITE();
                    props.navigation.navigate('Home')
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