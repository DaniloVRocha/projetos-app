import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem } from 'react-native-elements';
import api from '../services/api';


export default props => {

    const [projetos, setProjetos] = useState();

    useEffect(() => {
        api.get("/projetos")
            .then((res) => setProjetos(res.data))
            .catch((err) => {
                console.error("Erro ao consultar API, " + err);
            });
    }, []);

    const getProjetos = ({ item: projeto }) => (
        <ListItem
            onPress={() => props.navigation.navigate('Viewing', projeto)}
            key={projeto.id}
            bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{projeto.nome}</ListItem.Title>
                <ListItem.Subtitle>{projeto.descricao}</ListItem.Subtitle>   
            </ListItem.Content>
        </ListItem>
    );


    return (
        <View>
            <FlatList
                keyExtract={projeto => projeto.id.toString()}
                data={projetos}
                renderItem={getProjetos}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    icon: {
        color: "red",
        fontSize: 24,
        alignSelf: "center"
    }
});
