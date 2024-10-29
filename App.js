import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './components/card';
import Rodape from './components/Footer';
import { MERCADOS } from './data/mercados';

export default function App() {
  return (
    <View style={estilos.container}>
      <FlatList
        data={MERCADOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card mercado={item} />}
        contentContainerStyle={estilos.lista}
      />
      <Rodape />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  lista: {
    paddingHorizontal: 10,
  },
});
