import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Card({ mercado }) {
  return (
    <View style={estilos.card}>
      <Text style={estilos.nomeMercado}>{mercado.nome}</Text>
      <Text style={estilos.distancia}>{mercado.distancia} de você</Text>
      <View style={estilos.categorias}>
        {mercado.categorias.map((categoria, index) => (
          <Text key={index} style={estilos.categoria}>• {categoria}</Text>
        ))}
      </View>
      <View style={estilos.avaliacao}>
        {[...Array(mercado.avaliacao)].map((_, index) => (
          <FontAwesome key={index} name="star" size={20} color="yellow" />
        ))}
      </View>
      <MaterialIcons name="favorite-border" size={24} color="white" style={estilos.iconeFavorito} />
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: '#FF6B00',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  nomeMercado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  distancia: {
    fontSize: 14,
    color: '#FFF',
  },
  categorias: {
    marginVertical: 5,
  },
  categoria: {
    fontSize: 12,
    color: '#FFF',
  },
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeFavorito: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});