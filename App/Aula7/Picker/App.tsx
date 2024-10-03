import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {

  const [produtoSelecionado, setProdutoSelecionado] = useState(0);
  const [produtos, setProdutos] = useState([
    {key: 1, nome: 'Laptop', preco: 4000},
    {key: 2, nome: 'Monitor', preco: 1600},
    {key: 3, nome: 'Vision Pro', preco: 3500},
  ]);

  const [value, setValue] = useState(50);
  const [isOn, setIsOn] = useState(false);

  const produtoItem = produtos.map((value, key) => {
    return (
      <Picker.Item
        key={key}
        value={key}
        label={value.nome}
      />
    )
  });

  return (
    <SafeAreaView >
      <Picker
        selectedValue={produtoSelecionado}
        onValueChange={(item) => setProdutoSelecionado(item)}
      >
        {produtoItem}
      </Picker>
      <Text style={{fontSize: 24}}>{produtos[produtoSelecionado].nome}</Text>
      
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(value) => setValue(value)}
        step={10}
      />
      <Text style={{fontSize: 24}}>{value.toFixed(2)}</Text>
      <Switch
        onValueChange={(item) => setIsOn(item)}
        value={isOn}
        trackColor={{false: 'gray', true: 'red'}}
        ios_backgroundColor="#3e3e3e"
      ></Switch>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
