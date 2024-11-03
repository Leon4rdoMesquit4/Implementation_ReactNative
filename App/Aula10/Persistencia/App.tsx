import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    await AsyncStorage.getItem("name").then((value) => {
      setName(value ?? "");
    });
  }

  async function addName() {
    await AsyncStorage.setItem("name", input);
    setName(input);
    setInput("");
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Type your name"
          onChangeText={(value) => setInput(value)}
        ></TextInput>
        <Button title="+" onPress={() => addName()}></Button>
      </View>
      <Text>{name}</Text>
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
});
