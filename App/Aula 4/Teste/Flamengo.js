// import React, { useState } from 'react';
// import { View, Image, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

// const App = () => {
//   const [scale] = useState(new Animated.Value(1));

//   const onPressIn = () => {
//     Animated.spring(scale, {
//       toValue: 1.5, // Aumenta a escala para 1.5x
//       useNativeDriver: true,
//     }).start();
//   };

//   const onPressOut = () => {
//     Animated.spring(scale, {
//       toValue: 1, // Retorna a escala ao tamanho original
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
//         <Animated.Image
//           source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png' }}
//           style={[styles.image, { transform: [{ scale }] }]}
//         />
//       </TouchableWithoutFeedback>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 320,
//     height: 400,
//   },
// });

// export default App;

// import { StatusBar } from 'expo-status-bar';
// import {TextInput, Text, Image, SafeAreaView} from 'react-native';
// import {Dimensions} from 'react-native';
// import {useState} from 'react'

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// function App() {
//   let nome = 'Gabigol'
//   const [name, setName] = useState(null)

//   return (
//     <SafeAreaView style={{ alignItems: 'center' }}>
//       <Header text={name}/>
//       <Imagem largura={windowWidth - 40} comprimento={435}  />
//       <TextInput
//         placeholder="Escreva aqui"
//         value={name}
//         onChangeText={setName}
//       />
//     </SafeAreaView>
//   );
// }

// export default App

// function Imagem(props) {
//   let gabigolImg = 'https://colunadofla.com/wp-content/uploads/2024/07/Flamengo-x-Fortaleza-Campeonato-Brasileiro-Estadio-do-Maracana-11-07-2024-MaceloCortes_NWS0653-860x484.jpg'
//   let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png'
  
//   //1200 x 1485
//   return (
//     <Image 
//       source={{ url: img }}
//       width={props.largura}
//       height={props.comprimento}
//     />
//   )
// }

// function Header({text}) {
  
//   return (
//     <Text style={{ fontSize: 24, color: 'red', fontWeight: 'bold' }}>
//       {text}
//       </Text>
//   )
// }

// import {TextInput, Text, Image, SafeAreaView} from 'react-native';
// import {Dimensions} from 'react-native';
// import {useState} from 'react'

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// function App() {
//   let nome = 'Gabigol'
//   const [name, setName] = useState(null)

//   return (
//     <SafeAreaView style={{ alignItems: 'center' }}>
//       <Header text={name}/>
//       <Imagem largura={windowWidth - 40} comprimento={435}  />
//       <TextInput
//         placeholder="Escreva aqui"
//         value={name}
//         onChangeText={setName}
//       />
//     </SafeAreaView>
//   );
// }

// export default App

// function Imagem(props) {
//   let gabigolImg = 'https://colunadofla.com/wp-content/uploads/2024/07/Flamengo-x-Fortaleza-Campeonato-Brasileiro-Estadio-do-Maracana-11-07-2024-MaceloCortes_NWS0653-860x484.jpg'
//   let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/1200px-Flamengo_braz_logo.svg.png'
  
//   //1200 x 1485
//   return (
//     <Image 
//       source={{ url: img }}
//       width={props.largura}
//       height={props.comprimento}
//     />
//   )
// }

// function Header({text}) {
  
//   return (
//     <Text style={{ fontSize: 24, color: 'red', fontWeight: 'bold' }}>
//       {text}
//       </Text>
//   )
// }