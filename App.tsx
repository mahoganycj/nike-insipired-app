import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Sample } from './components/Sample';

export default function App() {
  return (
    <View className='flex-1 bg-purple-600 items-center justify-center'>
      <Sample variable='This is a Text.'/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'red',
//     fontSize: 36,
//   },
// });

