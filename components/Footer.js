import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <TouchableOpacity>
        <MaterialIcons name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="search" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="notifications" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="person" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FF6B00',
    paddingVertical: 10,
  },
});
