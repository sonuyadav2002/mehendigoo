import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.item}>Notifications</Text>
        <Text style={styles.item}>Privacy</Text>
        <Text style={styles.item}>Account</Text>
        <Text style={styles.item}>Help & Support</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8FA" },
  header: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 12 },
  title: { fontSize: 24, fontWeight: "700", color: "#222" },
  content: { paddingHorizontal: 20, marginTop: 12 },
  item: { paddingVertical: 14, fontSize: 16, color: "#222" },
});
