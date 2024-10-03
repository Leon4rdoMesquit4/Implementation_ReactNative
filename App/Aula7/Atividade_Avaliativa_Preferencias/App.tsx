import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { title } from "process";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  const [isNoturneMode, setIsNoturneMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [theme, setTheme] = useState([
    { key: 1, nome: "Light Mode" },
    { key: 2, nome: "Dark Mode" },
    { key: 3, nome: "Automatic" },
  ]);
  const [fontSize, setFontSize] = useState(12);
  const actualTheme = theme.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome} />;
  });
  const restartVariables = () => {
    setSelectedTheme(0);
    setIsNoturneMode(false);
    setFontSize(16);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title]}>Configurações de Preferências</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.subtitle]}>
          Select a theme: {theme[selectedTheme].nome}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedTheme}
          onValueChange={(item) => setSelectedTheme(item)}
        >
          {actualTheme}
        </Picker>
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.subtitle]}>
          Ajustar tamanho da fonte: {fontSize}
        </Text>
        <Slider
          style={styles.picker}
          minimumValue={12}
          maximumValue={30}
          value={fontSize}
          step={1}
          onValueChange={(item) => setFontSize(item)
          }
          minimumTrackTintColor="red"  
        maximumTrackTintColor="#3e3e3e"  
        thumbTintColor="white" 
        />
        <View style={styles.sub2horizontalContainer}>
          <Text style={[styles.subtitle]}>
            Modo noturno: {isNoturneMode ? "Ativado" : "Desativado"}
          </Text>
          <Switch
            onValueChange={(item) => setIsNoturneMode(item)}
            value={isNoturneMode}
            trackColor={{ false: "gray", true: "red" }}
            ios_backgroundColor="#3e3e3e"
          ></Switch>
        </View>
        
        <TouchableHighlight  style={styles.restartButton}
        onPress={restartVariables}
        >
          <Text style={[styles.restartTitle]}>
            Reiniciar configurações do sistema
          </Text>
        </TouchableHighlight>
        </View>
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    // alignItems: "center",
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  subContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sub2horizontalContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  sub2verticalContainer: {},
  title: {
    color: "#232323",
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    color: "#232323",
    fontWeight: "regular",
    fontSize: 18,
  },
  restartTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    padding: 20
  },
  picker: {
    width: "100%",
  },
  slider: {
    width: "100%",
  },
  restartButton: {
    marginTop: 300,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'red'
  }
});
