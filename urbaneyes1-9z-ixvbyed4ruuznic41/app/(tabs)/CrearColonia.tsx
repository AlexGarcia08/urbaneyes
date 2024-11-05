import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CrearColoniaScreen = () => {
  const [coloniaName, setColoniaName] = useState('');
  const [codigoColonia, setCodigoColonia] = useState('');

  const generarCodigo = () => {
    // Genera un código aleatorio de 4 dígitos
    const codigo = Math.floor(1000 + Math.random() * 9000).toString();
    setCodigoColonia(codigo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Colonia</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la colonia"
        value={coloniaName}
        onChangeText={setColoniaName}
        autoCapitalize="none"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={generarCodigo}>
        <Text style={styles.buttonText}>Generar</Text>
      </TouchableOpacity>

      {/* Mostrar el código generado si existe */}
      {codigoColonia !== '' && (
        <Text style={styles.codigoText}>Código generado: {codigoColonia}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1c3c', // Azul oscuro
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff', // Texto en blanco
    marginBottom: 30,
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
  codigoText: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
  },
});

export default CrearColoniaScreen;
