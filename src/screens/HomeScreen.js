import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from "@rneui/themed";
import Header from '../components/Header';
import List from '../components/List';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Header style={styles.header}></Header>
            <List style={styles.cardList}></List>
            <Button style={styles.buttonPlus}
                onPressIn={() =>
                    navigation.navigate('Register')
                }/>
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
        height: 56,
        width: 56,
        marginTop: 250,
        marginLeft: 325
    }
});