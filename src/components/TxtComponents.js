import { Text } from "react-native";

// Nesse arquivo, eu estou chamando o children dos TEXT
export default function TxtComponent({ children }) {
  return <Text>{children}</Text>;
}
