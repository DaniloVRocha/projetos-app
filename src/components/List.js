import React, { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Button, Icon, ListItem } from 'react-native-elements';
import api from '../services/api';
import Project from '../services/Project';


export default props => {

    const [projetos, setProjetos] = useState();

    useEffect(() => {
        api.get("/projetos")
            .then((res) => {
                setProjetos(res.data)
            })
            .catch((err) => {
                console.error("Erro ao consultar API, " + err);
            });
    }, []);

    function deleteProjeto(projeto) {
        Alert.alert('Excluir Projeto', 'Deseja Excluir o Projeto?', [
            {
                text: 'Sim',
                onPress() {
                    api.delete(`/projetos/${projeto.id}`)
                        .then((res) => {
                            Project.create(projeto)
                            Alert.alert("Projeto Enviado Para a Lixeira.")
                            Project.getAll().then(projetos => projetos.forEach(c => console.log(c)))
                        })
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
