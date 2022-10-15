import { ListItem } from '@rneui/themed';
import React, { useEffect, useState } from "react";
import { View } from "react-native";
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
                    <ListItem key={i} >
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