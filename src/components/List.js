import React, { Component } from "react";
import { View } from "react-native";
import { ListItem } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import api from '../services/api';


export default function List() {

    const [projetos, setProjetos] = useState();

    useEffect(() => {
        api.get("/projetos")
            .then((res) => setProjetos(res.data))
            .catch((err) => {
                console.error("Erro ao consultar API, " + err);
            });
    }, []);

    return (
        <View>
            {
                projetos?.map((l, i) => (
                    <ListItem key={i}>
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