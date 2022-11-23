import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem, Button, Icon } from 'react-native-elements';
import api from '../services/api';
import Project from '../services/Project'

export default props => {

    const [projetos, setProjetos] = useState();

    useEffect(() => {
        Project.getAll().then(projetos => setProjetos(projetos))
    })

    function restaurarProjeto(projeto){
        aux = projeto.id;
        projeto.id = undefined;
        api.post("/projetos", projeto)
        .then((response) => {
            Project.remove(aux)
                .then(Alert.alert("Projeto Restaurado com sucesso."))
                .catch(error => console.error(error))
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
        
    

    function deleteProjeto(projeto) {
        Alert.alert('Excluir Projeto Permanentemente? ', 'O Projeto não poderá ser recuperado',[
            {
                text: 'Sim',
                onPress() {
                    Project.remove(projeto.id);
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
                onPress={() => restaurarProjeto(projeto)}
                type="clear"
                icon={<Icon name="refresh" size={25} color="blue" />}
            />
            <Button
                onPress={() => deleteProjeto(projeto)}
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