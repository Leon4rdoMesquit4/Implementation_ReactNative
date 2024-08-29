import {TextInput, Text, Image, SafeAreaView} from 'react-native';
import {useState} from 'react'

function App() {
  let nome = 'Gabigol'
  const [name, setName] = useState(null)

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Header text={name}/>
      <Imagem largura={windowWidth - 40} comprimento={435}  />
      <TextInput
        placeholder="Escreva aqui"
        value={name}
        onChangeText={setName}
      />
    </SafeAreaView>
  );
}

export default App