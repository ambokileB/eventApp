import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreen } from './src/screens/Home';
import { Color } from './src/constants';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.whitemable} />
       <HomeScreen/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
