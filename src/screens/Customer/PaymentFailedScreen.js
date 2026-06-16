import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentFailedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="close-circle-outline" size={50} color="#E53030" />
        </View>
        <Text style={styles.title}>Payment Failed</Text>
        <Text style={styles.subtitle}>
          Your payment could not be processed. Please try again or use a
          different payment method.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlinedButton}
          onPress={() => navigation.navigate("MyBookings")}
        >
          <Text style={styles.outlinedButtonText}>Go to Bookings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FEF0F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1D1D1D",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#7A7A7A",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#F7146B",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  outlinedButton: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },
  outlinedButtonText: {
    color: "#1D1D1D",
    fontSize: 16,
    fontWeight: "600",
  },
});
