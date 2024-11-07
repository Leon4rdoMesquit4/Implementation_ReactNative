import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([""]);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    getTarefas();
  }, []);

  async function addTarefas() {
    try {
      const tarefasAtualizadas = [...tarefas, tarefa];
      setTarefas(tarefasAtualizadas);
      await AsyncStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
      setTarefa("");
    } catch (error) {
      console.error(error);
    }
  }

  async function getTarefas() {
    try {
      await AsyncStorage.getItem("tarefas").then((value) => {
        if (value !== null) {
          setTarefas(JSON.parse(value));
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function deletarTarefas(tarefa: string) {
    const index = tarefas.indexOf(tarefa);
    let tarefasAtualizadas = [...tarefas];
    try {
      if (index > -1) {
        tarefas.splice(index, 1);
        tarefasAtualizadas = tarefas;
      } else {
        console.error("Tarefa não encontrada");
      }
      await AsyncStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
      setTarefas(tarefasAtualizadas);
      getTarefas();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua tarefa"
        placeholderTextColor={"gray"}
        onChangeText={(value) => setTarefa(value)}
        value={tarefa}
      ></TextInput>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: isPressed ? "#07d" : "#05f",
            transform: [{ scale: isPressed ? 0.98 : 1 }],
          },
        ]}
        onPressOut={() => {
          setIsPressed(false);
          addTarefas();
        }}
        onPressIn={() => setIsPressed(true)}
      >
        <Text style={styles.text2}>Clique aqui</Text>
      </Pressable>
      <FlatList
        style={styles.list}
        data={tarefas}
        renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.box}
              onLongPress={() =>
                Alert.alert(
                  "Deseja mesmo apagar o app?",
                  "Essa ação não poderá ser desfeita",
                  [
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => deletarTarefas(item) },
                  ]
                )
              }
            >
              <Text>{item}</Text>
            </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  text2: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingVertical: 12,
  },
  input: {
    height: 40,
    width: "90%",
    paddingHorizontal: 10,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "#05f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  box: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  list: {
    width: "90%",
    marginTop: 20,
  },
});
