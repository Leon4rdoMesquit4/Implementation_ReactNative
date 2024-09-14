import { SafeAreaView, StyleSheet, View, Image, ScrollView } from "react-native";
import { userState } from 'react'

function App() {

const [users, setUsers] = userState(
  [
    
  ]
)

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, height: 250, backgroundColor: 'red'}}></View>
        <View style={{ flex: 1, height: 250, backgroundColor: 'blue'}}></View>
        <View style={{ flex: 1, height: 250, backgroundColor: 'green'}}></View>
        <View style={{ flex: 1, height: 250, backgroundColor: 'purple'}}></View>
      </ScrollView>
    </View>
  );
}

export default App;

let styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
}
)