import { StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider} from "react-native-paper"
import react, { useState } from 'react';
import Login from './src/Screens/Login';

export default function App() {
  const [inisesion, setinisesion] = useState(undefined);
  return (
  <PaperProvider>
    {inisesion ? <Text>Zona de usuarios</Text> : <Login/>}
  </PaperProvider>
  );
}

const styles = StyleSheet.create({});
