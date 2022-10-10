import React, { Component } from "react";
import { View } from "react-native";
import { ListItem } from '@rneui/themed';
import { useState, useEffect } from "react";
 import api from '../services/api';

// const list = [
//     {
//         nome: 'Projeto React',
//         descricao: 'Gerenciador de projetos, CRUD',
//         valor: 22.99
//     },
//     {
//         nome: 'Projeto React',
//         descricao: 'Gerenciador de projetos, CRUD',
//         valor: 22.99
//     }
// ];


export default function List() {

    const [projetos, setProjetos] = useState();

    useEffect(() => {
        api
            .get("/projetos")
            .then((res) => setProjetos(res.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <View>
            {
                projetos?.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l.nome}</ListItem.Title>
                            <ListItem.Subtitle>{l.descricao}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    );
}