import { ListItem } from '@rneui/themed';
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import api from '../services/api';


export default function List(props) {

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
                    <ListItem key={i} button
                    onPress={() =>{
                        console.log(i)
                        props.navigation.navigate(`${props.nav}`, { id: `${i+1}` })
                    }}>
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