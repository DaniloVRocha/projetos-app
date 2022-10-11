import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';

export default function RegisterScreen() {
    return (
    <View style={styles.container}>
        <Header style={styles.header}></Header>
        <Button style={styles.buttonPlus}></Button>
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