import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>E</Text>
        </TouchableOpacity>
      </View>

      <View style={{width: '90%', height: 0.5, backgroundColor: 'gray'}}></View>

      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/Gabigol.jpeg")}
          style={styles.image}
        ></Image>
        <TouchableOpacity style={styles.overlay}>
          <Text>Overlay Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.overlay2}>
          <Text>Overlay Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.overlay3}>
          <Text>Overlay Text</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Design</Text>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>A</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.equalView}></View>
        <View style={styles.equalView}></View>
        <View style={styles.equalView}></View>
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.buttonText}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button3]}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button3]}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>

      
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
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  button: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  button2: {
    backgroundColor: "gray",
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 50,
  },
  button3: {
    backgroundColor: "gray",
    paddingVertical: 20,
    paddingHorizontal: 26,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText2: {
    color: "white",
    fontSize: 13,
  },
  equalView: {
    width: '30%', 
    height: 200, 
    backgroundColor: 'gray' ,
    borderRadius: 20,
  },
  image: {
    width: 360,
    height: 300,
    borderRadius: 20,
  },
  imageContainer: {
    position: "relative",
    padding: 20,
  },
  overlay: {
    position: "absolute",
    top: 35,
    left: 35,
    right: 35,
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay2: {
    position: "absolute",
    top: 35,
    right: 35,
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay3: {
    position: "absolute",
    bottom: 35,
    right: 35,
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
