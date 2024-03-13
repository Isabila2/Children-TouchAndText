import { TouchableOpacity } from "react-native";

// Esse arquivo está chamando os children do TouchableOpacity de imagem
export default function TouchImageComponent({ children }) {
  //Função Onpress da imagem, porque se for no app não funciona...
  imgfunction = () => {
    alert("Imagem bonita, né?");
  };
  return <TouchableOpacity onPress={imgfunction}>{children}</TouchableOpacity>;
}
