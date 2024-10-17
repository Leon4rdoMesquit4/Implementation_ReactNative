import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useState } from "react";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const parseNumber = (value: string) => {
    return parseFloat(value.replace(",", "."));
  };

  const calcularImc = () => {
    const alturaNumber = parseNumber(altura);
    const pesoNumber = parseNumber(peso);

    const imc = pesoNumber / (alturaNumber * alturaNumber);

    if (isNaN(imc)) {
      return ""
    }

    if (imc < 17){
      return `Muito abaixo do peso. \nIMC: ${imc.toFixed(2)}`;
    } else if (imc < 18.5) {
      return `Abaixo do peso. \nIMC: ${imc.toFixed(2)}`;
    } else if (imc < 24.9) {
      return `Peso normal. \nIMC: ${imc.toFixed(2)}`;
    } else if (imc < 29.9) {
      return `Acima do Peso. \nIMC: ${imc.toFixed(2)}`;
    } else if (imc < 34.9) {
      return `Obesidade grau 1. \nIMC: ${imc.toFixed(2)}`;
    } else if (imc < 39.9) {
      return `Obesidade grau 2. \nIMC: ${imc.toFixed(2)}`;
    } else {
      return `Obesidade grau 3. \nIMC: ${imc.toFixed(2)}`;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i0.wp.com/www.opas.org.br/wp-content/uploads/2018/08/tabela-imc-1024x379.jpg?resize=696%2C258&ssl=1' }}
        style={styles.image}
      />
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Digite sua altura"
        value={altura}
        keyboardType="numeric"
        onChangeText={setAltura}
      ></TextInput>
      
      <TextInput
        style={styles.textInput}
        placeholder="Digite seu peso"
        value={peso}
        keyboardType="numeric"
        onChangeText={setPeso}
      ></TextInput>

      <Text>{calcularImc()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
  title:{
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
    width: 310,
    height: 115,
    marginBottom: 20
  }
});
