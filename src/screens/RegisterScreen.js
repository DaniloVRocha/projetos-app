import React from "react";
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';



export default function RegisterScreen({ navigation }) {
    const [text, onChangeText] = React.useState(null);
    return (
        <View style={styles.container}>
            <Header style={styles.header} name="CADASTRAR"></Header>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Nome"
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Descrição"
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Valor"
                keyboardType="text"
            />
            <Text style={{margin: 12, fontSize: 15, fontWeight: "bold"}}>Ações</Text>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Insira uma referência por linha"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
            <Text style={{margin: 12, fontSize: 15, fontWeight: "bold"}}>Referências</Text>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Insira uma referência por linha"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
            <Button style={styles.buttonPlus} icon='check'
                nav='Home' navigation={navigation}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});