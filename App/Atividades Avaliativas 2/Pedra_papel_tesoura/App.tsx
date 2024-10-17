import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const opcoes = {
    pedra: require("./assets/pedra.png"),
    papel: require("./assets/papel.png"),
    tesoura: require("./assets/tesoura.png"),
  };

  const [escolhaDoJogador, setescolhaDoJogador] = useState(opcoes.papel);
  const [escolhaDoAdversário, setescolhaDoAdversário] = useState(opcoes.pedra);
  const [resultado, setResultado] = useState('');

  const [estaJogando, setEstaJogando] = useState(false);

  const escolhaAleatoria = () => {
    const choose = [opcoes.pedra, opcoes.papel, opcoes.tesoura];
    const random = Math.floor(Math.random() * 3);
    return choose[random];
  };

  const escolherGanhador = (adversario: any, jogador: any) => {
    if (
      (jogador === opcoes.pedra && adversario === opcoes.tesoura) ||
      (jogador === opcoes.tesoura && adversario === opcoes.papel) ||
      (jogador === opcoes.papel && adversario === opcoes.pedra)
    ) {
      return "Parabéns, você ganhou!";
    }

    if (jogador === adversario) {
      return "Empate";
    }

    return "Que pena, você perdeu!";
  }

  const jogar = (opcaoDoJogador: any) => {
    const adversario = escolhaAleatoria(); 
    const resultado = escolherGanhador(opcaoDoJogador, adversario); 
    setescolhaDoJogador(opcaoDoJogador); 
    setescolhaDoAdversário(adversario); 
    setResultado(resultado);
    setEstaJogando(false);
  };

  const getResultadoStyle = () => {
    if (resultado === "Parabéns, você ganhou!") {
      return { color: 'green' };
    } else if (resultado === "Que pena, você perdeu!") {
      return { color: 'red' };
    } else {
      return { color: 'orange' };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>

    <View style={styles.jogo}> 
      <View style={styles.subContainer}>
        <View style={styles.botoes}>
          <Text style={styles.jogadores}>Sua jogada:</Text>

          {!estaJogando ? (
          <Image style={styles.imagem} source={escolhaDoJogador}></Image>) : (
            <View></View>
          )}
        </View>

        <Text>X</Text>

        <View style={styles.botoes}>
          <Text style={styles.jogadores}>Adversário:</Text>
          {!estaJogando ? (
          <Image style={styles.imagem} source={escolhaDoAdversário}></Image>) : (
            <View></View>
          )}
        </View>
      </View>
      <Text style={[styles.resultado, getResultadoStyle()]}>{resultado}</Text>
    </View>

      {estaJogando ? (
        <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.botoes}
          onPress={() => {
            jogar(opcoes.papel);
          }}
        >
          <Text>Papel</Text>
          <Image style={styles.imagem} source={opcoes.papel}></Image>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botoes}
          onPress={() => {
            jogar(opcoes.tesoura);
          }}
        >
          <Text>Tesoura</Text>
          <Image style={styles.imagem} source={opcoes.tesoura}></Image>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botoes}
          onPress={() => {
            jogar(opcoes.pedra);
          }}
        >
          <Text>Pedra</Text>
          <Image style={styles.imagem} source={opcoes.pedra}></Image>
        </TouchableOpacity>
      </View>): (

        <TouchableOpacity
          style={styles.botoes}
          onPress={() => {
            setEstaJogando(true);
          }}
        >
          <Text>Iniciar Jogo</Text>
        </TouchableOpacity>

      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  botoes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  subContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  jogadores: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  jogo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: "center",
  },
  resultado: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
  },
});