import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem, Button, Icon } from 'react-native-elements';
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

    function deleteProjeto(id) {
        Alert.alert('Excluir Projeto', 'Deseja Excluir o Projeto?',[
            {
                text: 'Sim',
                onPress() {
                    api.delete(`/projetos/${id}`)
                        .then((res) => Alert.alert("Projeto Deletado com sucesso"))
                        .catch((err) => {
                            console.error("Erro ao consultar API, " + err);
                        });
                }
            },
            {
                text: 'Não'
            }])
    }

    const getProjetos = ({ item: projeto }) => (
        <ListItem
            onPress={() => props.navigation.navigate('Viewing', projeto)}
            key={projeto.id}
            bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{projeto.nome}</ListItem.Title>
                <ListItem.Subtitle>{projeto.descricao}</ListItem.Subtitle>
            </ListItem.Content>
            <Button
                onPress={() => deleteProjeto(projeto.id)}
                type="clear"
                icon={<Icon name="delete-forever" size={25} color="red" />}
            />
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

});
