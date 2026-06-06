import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Onboarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="#333" />

        <Ionicons name="ellipsis-horizontal" size={20} color="#333" />
      </View>

      {/* Main Image */}
      <View style={styles.imageCard}>
        <Image
          source={require("../../assets/images/o3.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Make Every Moment Special</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Discover talented artists</Text>

      <Text style={styles.subtitle}>perfectly suited for your events.</Text>

      {/* Button */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imageCard: {
    width: "100%",
    height: 320,
    backgroundColor: "#F7F7F7",
    borderRadius: 30,
    marginTop: 30,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    marginTop: 35,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    textAlign: "center",
    color: "#8A8A8A",
    fontSize: 15,
    marginTop: 8,
  },

  button: {
    height: 54,
    backgroundColor: "#F7146B",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
