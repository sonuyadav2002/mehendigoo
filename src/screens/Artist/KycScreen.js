import { StyleSheet, Text, View } from "react-native";

export default function KycScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KYC Verification</Text>
      <Text style={styles.subtitle}>
        Complete identity verification and compliance checks.
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
