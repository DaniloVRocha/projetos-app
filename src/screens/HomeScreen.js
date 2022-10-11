import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Icon } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import Header from '../components/Header';
import List from '../components/List';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header style={styles.header} name="PROJETOS" ></Header>
            <List style={styles.cardList}></List>
            <Avatar
                size={54}
                rounded
                icon={{ name: 'plus', type: 'font-awesome' }}
                containerStyle={styles.buttonPlus}
                onPressIn={() =>
                    navigation.navigate('Register')
                }
            />
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
        backgroundColor:"#2089dc",
        marginTop: 250,
        marginLeft: 325
    }
});