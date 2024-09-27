import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState(String);
  const [quote, setQuote] = useState(String);
  const [randomQuoteIsPresented, setRandomQuoteIsPresented] = useState(true);

  const quotes = require("./quotes.json");

  function getRandomQuote() {
    const randomIndex = Math.floor(
      Math.random() * quotes.motivationalQuotes.length
    );
    setImage(quotes.motivationalQuotes[randomIndex].photo);
    setQuote(quotes.motivationalQuotes[randomIndex].quote);
    setQuoteAuthor(quotes.motivationalQuotes[randomIndex].author);
    setRandomQuoteIsPresented(false);
  }

  return (
    <View style={styles.container}>
      {randomQuoteIsPresented ? (
        <View style={{ paddingHorizontal: 50 }}>
          <Image style={{resizeMode: "contain",
              width: 350,
              height: 200,}} source={{uri: "https://www.gov.br/sudeco/pt-br/media/Aspas.png"}} ></Image>
          <Text style={{fontSize: 30, fontWeight: "bold", textAlign: 'center', paddingTop: 50}}>Quotes App</Text>
          <Button title="Get a quote!" onPress={getRandomQuote}></Button>
        </View>
      ) : (
        <View style={{ paddingHorizontal: 50 }}>
          <Image
            style={{
              resizeMode: "cover",
              width: 350,
              height: 400,
              borderRadius: 15,
            }}
            source={{ uri: image }}
          ></Image>
          <Text
            style={{
              alignContent: "center",
              fontSize: 25,
              paddingTop: 15,
              fontWeight: "bold",
            }}
          >
            {quoteAuthor}
          </Text>
          <Text style={{ paddingVertical: 10, alignContent: "center" , fontStyle: "italic"}}>
            {quote}
          </Text>
          <Button title="Another Quote" onPress={ () => getRandomQuote()}></Button>
        </View>
      )}
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
