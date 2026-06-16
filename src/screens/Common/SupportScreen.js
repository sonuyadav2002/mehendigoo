import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function SupportScreen() {
  const supportOptions = [
    { title: "Chat with Us", icon: "chatbubble-ellipses-outline", color: Colors.primary },
    { title: "Call Us", icon: "call-outline", color: Colors.success },
    { title: "FAQs", icon: "help-circle-outline", color: Colors.warning },
    { title: "Raise a Ticket", icon: "document-text-outline", color: Colors.info },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.subtitle}>How can we help you?</Text>

      <View style={styles.optionsContainer}>
        {supportOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <View style={styles.leftSection}>
              <View style={[styles.iconCircle, { backgroundColor: item.color + "20" }]}>
                <Ionicons name={item.icon} size={20} color={item.color} />
              </View>
              <Text style={styles.optionText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={Colors.textTertiary} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text },
  subtitle: { marginTop: 6, fontSize: 14, color: Colors.textSecondary, marginBottom: 25 },
  optionsContainer: { gap: 12 },
  optionItem: { height: 58, borderWidth: 1, borderColor: Colors.border, borderRadius: 12, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  leftSection: { flexDirection: "row", alignItems: "center" },
  iconCircle: { width: 40, height: 40, borderRadius: 12, justifyContent: "center", alignItems: "center", marginRight: 14 },
  optionText: { fontSize: 15, fontWeight: "500", color: Colors.text },
});
