import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import React, { useState } from "react";

export default function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milisseconds, setMilisseconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [interval, setCustomInterval] = useState<NodeJS.Timeout>();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTimer();
      }, 1)
    );
  };

  const changeTimer = () => {
    setMilisseconds((prevState) => {
      if (prevState == 99) {
        setSeconds((prevSeconds) => {
          if (prevSeconds == 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
        return 0;
      } else {
        return (prevState += 1);
      }
    });
  };

  const stopTimer = () => {
    if (interval) {
      clearInterval(interval);
    }
  };

  const revertLastAction = () => {
    if (isActive) {
      setIsActive(false);
      startTimer();
    } else {
      setIsActive(true);
      stopTimer();
    }
  };

  const resetTimer = () => {
    stopTimer();
    setMilisseconds(0);
    setMinutes(0);
    setSeconds(0);
    setIsActive(true);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {(minutes).toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milisseconds.toString().padStart(2, "0")}
        </Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity onPress={() => resetTimer()}>
          <Image
            source={require("./images/Repeat.png")}
            style={{
              width: 35,
              height: 35,
              resizeMode: "contain",
              paddingHorizontal: 60,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => revertLastAction()}>
          <Image
            source={
              !isActive
                ? require("./images/Pause.png")
                : require("./images/Play.png")
            }
            style={{
              width: 35,
              height: 35,
              resizeMode: "contain",
              paddingHorizontal: 60,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#161633",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container2: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
    marginBottom: 70,
  },
  text: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
    transform: [{ translateY: 40 }],
  },
  text2: {
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
  },
});
