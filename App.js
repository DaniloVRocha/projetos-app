import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import List from './src/components/List';
import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      <List style={styles.cardList}></List>
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
    marginTop: 23,
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
    marginTop: 425,
    marginLeft: 325
  }
});
