import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ColoniasScreen = () => {
  const [coloniaCode, setColoniaCode] = useState('');

  const handleJoin = () => {
    // Lógica para unirse a una colonia
    alert(`Intentando unirse a la colonia con código: ${coloniaCode}`);
  };

  const handleCreate = () => {
    // Lógica para crear una nueva colonia
    alert('Creando una nueva colonia');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colonias</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa el código de la colonia"
        value={coloniaCode}
        onChangeText={setColoniaCode}
        autoCapitalize="none"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>Unirse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1c3c', // Fondo azul oscuro
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff', // Texto en blanco para mejor contraste
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#5565f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
});

export default ColoniasScreen;
