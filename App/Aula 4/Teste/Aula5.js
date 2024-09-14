import { SafeAreaView, StyleSheet, View, Image } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.redBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.blueBox}></View>
      <Image style={styles.box} source={require('./Fotos/1.webp') } ></Image>
    </SafeAreaView>
  );
}

export default App;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    backgroundColor: 'green',
  },
  title: {
    fontSize: 34,
    color: "#F0852E",
    fontWeight: "bold",
  },
  textRed: {
    color: "red",
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
  ,
  box: {
    width: 100,
    height: 100,
  },
});

function getApiGithub() {
  
}