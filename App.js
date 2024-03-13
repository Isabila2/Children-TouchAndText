import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./src/styles/StyleSheet";
// Importando os componentes
import TxtComponent from "./src/components/TxtComponents";
import TouchComponent from "./src/components/TouchComponents";
import TouchImageComponent from "./src/components/TouchImageComponent";

export default function App() {
  // As mensagens que o aparecer quando clicar no botão
  login = () => {
    alert("Você efetuou o login corretamente!");
  };
  signin = () => {
    alert("Esse é o botão de cadastro.");
  };
  return (
    // A view principal
    <View style={styles.container}>
      {/*Essas são as children do TxtComponent. São responsáveis pelos textos que aparecem na tela*/}
      <TxtComponent>
        <Text style={styles.text1}>Bem-Vindo ao meu Site!</Text>
      </TxtComponent>

      <TxtComponent>
        <Text style={styles.text2}>Sinta-se livre para explorar.</Text>
      </TxtComponent>

      <TxtComponent>
        <Text style={styles.text3}>Gostou do site?? Deixe um comentário.</Text>
      </TxtComponent>

      {/*Essas são as children do TouchComponent. Os botãos que aparecem na tela estão aqui.*/}
      <View style={styles.botoes}>
        <TouchComponent>
          <Text onPress={login} style={styles.loginnbtn}>
            Log In
          </Text>
        </TouchComponent>

        <TouchComponent>
          <Text onPress={signin} style={styles.signbtn}>
            Sign In
          </Text>
        </TouchComponent>

        {/*Essas são as children do TouchComponent de imagens. Aqui é a imagem.*/}
        <TouchImageComponent>
          <Image
            source={require("./src/assets/images/botao.png")}
            style={[
              styles.logo,
              {
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            resizeMode="cover"
          />
        </TouchImageComponent>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
