import { View, Text } from "react-native";

type UserType = {
  user: {
    id: number;
    nome: string;
    idade: number;
    email: string;
  };
};

function User(props: UserType) {
  return (
    <View style={{backgroundColor: 'gray', padding: 15, borderRadius: 15}}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Nome: {props.user.nome}
      </Text>
      <Text style={{ fontSize: 15 }}>Idade: {props.user.idade}</Text>
      <Text style={{ fontSize: 15 }}>Email: {props.user.email}</Text>
    </View>
  );
}

export default User;
