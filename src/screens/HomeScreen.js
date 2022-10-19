import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import List from '../components/List';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header style={styles.header} name="TESTE DE TITULO" ></Header>
            <List style={styles.cardList} nav='Viewing' navigation={navigation}></List>
            <Button style={styles.buttonPlus} icon='plus'
                nav='Register' navigation={navigation}></Button>
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
    cardList: {
        marginTop: 20,
        marginLeft: 9,
        marginRight: 8
    },
    buttonPlus: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    }
});