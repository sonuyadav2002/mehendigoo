import { StyleSheet, Text, View } from "react-native";

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookings</Text>
      <Text style={styles.subtitle}>
        View upcoming and past appointments with your artists.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
});
