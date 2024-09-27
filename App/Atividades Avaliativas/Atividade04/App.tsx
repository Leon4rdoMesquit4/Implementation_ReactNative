import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  const removeACustomer = () => {
    setCounter((prevCounter) => {
      if (prevCounter < 1) {
        return prevCounter;
      } else {
        return (prevCounter -= 1);
      }
    });
  };

  const addACustomer = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          Clientes: {counter}
          </Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button1} onPress={addACustomer}>
          <Text style={styles.textButton}>Adicionar cliente</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button2} onPress={removeACustomer}>
          <Text style={styles.textButton}>Remover Cliente</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161633",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 250
  },
  text: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 200,
    paddingBottom: 50
  },
  textButton: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  button1: {
    backgroundColor: "green",
    width: 300,
    height: 130,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#FF285f",
    width: 300,
    height: 130,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },

});
