import React, { useRef } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  Text,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [num, setNumber] = useState(Number);
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(200);
  const [isFirstViewVisible, setIsFirstViewVisible] = useState(true);

  const phrases = require('./lucky_cookie_phrases.json')
  const [currentPhrase, setCurrentPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.messages.length);
    // const randomIndex = phrases.messages.length - 1;
    setCurrentPhrase(phrases.messages[randomIndex]);
  };

  const images = [
    require("./Images/Quebra1.png"),
    require("./Images/Quebra2.png"),
    require("./Images/Quebra3.png"),
    require("./Images/Quebra4.png"),
  ];

  function setNumberSum() {
    if (num !== 3) {
      setNumber(num + 1);
      setWidth(width + 50);
      setHeight(height + 50);
    } else {
      setIsFirstViewVisible(false);
      getRandomPhrase();
      setNumber(0);
      setWidth(350);
      setHeight(200);
    }
  }

  function restartLuckyCookie() {
    setIsFirstViewVisible(true);
  }

  return (
    <View style={styles.container}>
      {isFirstViewVisible ? (
        <TouchableHighlight
          onPress={() => setNumberSum()}
          underlayColor={"white"}
        >
          <Image
            style={{ resizeMode: "contain", width: width, height: height }}
            source={images[num]}
          />
        </TouchableHighlight>
      ) : (
        <SafeAreaView>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Text
                style={{
                  textAlign: "center",
                  paddingHorizontal: 70,
                  fontSize: 15,
                  color: "black",
                  fontWeight: "bold",
                  transform: [{ translateY: 11 }],
                }}
              >
                {currentPhrase}
              </Text>
            </View>
            <Image
              style={{
                left: -80,
                resizeMode: "contain",
                width: 200,
                height: 180,
              }}
              source={require("./Images/1.png")}
            />
            <Image
              style={{
                right: -80,
                resizeMode: "contain",
                width: 200,
                height: 180,
              }}
              source={require("./Images/2.png")}
            />
          </View>

          <Button title="Reiniciar" onPress={restartLuckyCookie}></Button>
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  container3: {
    position: "absolute", 
    width: "100%",
    height: 75,
    resizeMode: "contain",
    backgroundColor: "#F0F0F0",
    transform: [{ translateY: -1 }],
  },
});
