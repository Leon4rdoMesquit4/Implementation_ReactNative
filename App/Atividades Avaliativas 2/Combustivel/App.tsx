import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (precoAlcool / precoGasolina < 0.7) {
      setResultado('Abasteça com Álcool');
    } else {
      setResultado('Abasteça com Gasolina');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://blog.clubpetro.com/wp-content/uploads/2022/01/como-abrir-posto-de-gasolina.jpg.webp' }}
        style={styles.image}
      />
      <Text style={styles.title}>Calculadora de Combustível</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      <Button title="Calcular" onPress={calcular} />

      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: "#dadada",
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 17,
    paddingVertical: 20
  },
  image: {
    width: 395,
    height: 155,
    marginBottom: 25
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;