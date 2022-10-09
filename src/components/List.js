import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { ListItem, Avatar } from '@rneui/themed'

const list = [
    {
        nome: 'Projeto React',
        descricao: 'Gerenciador de projetos, CRUD',
        valor: 22.99
    },
    {
        nome: 'Projeto React',
        descricao: 'Gerenciador de projetos, CRUD',
        valor: 22.99
    }
];

export default function List(props) {
    return (
        <View>
            {
                list.map((l, i) => (
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