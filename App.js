import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import List from './src/components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      <List style={styles.cardList}></List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 76,
    marginTop: 23
  },
  cardList: {
    marginTop: 20,
    marginLeft: 9,
    marginRight: 8
  }
});
