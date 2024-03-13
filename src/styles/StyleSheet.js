import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "blue",
    fontSize: 20,
  },
  text2: {
    color: "black",
    fontSize: 15,
  },
  text3: {
    color: "red",
    fontSize: 10,
  },
  botoes: {
    margin: 20,
  },
  btnTouch: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "#ee0b5b",
    borderWidth: 1,
    borderColor: "#2a2b2b",
    height: 40,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    marginTop: 20,
  },
  loginnbtn: {
    color: "purple",
    fontSize: 20,
  },
  signbtn: {
    color: "pink",
    fontSize: 30,
    letterSpacing: 1,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 90,
  },
});

export default styles;
