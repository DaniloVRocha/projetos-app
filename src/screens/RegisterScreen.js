import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Header from '../components/Header';

export default function RegisterScreen() {
    return (
    <View style={styles.container}>
        <Header style={styles.header} name="CADASTRAR"></Header>
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
    buttonPlus: {
        height: 56,
        width: 56,
        marginTop: 250,
        marginLeft: 325
    }
});