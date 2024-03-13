import { TouchableOpacity } from "react-native";
import styles from "../styles/StyleSheet";

// Esse arquivo está chamando os children do TouchableOpacity
export default function TouchComponent({ children }) {
  return (
    <TouchableOpacity style={styles.btnTouch}>{children}</TouchableOpacity>
  );
}
