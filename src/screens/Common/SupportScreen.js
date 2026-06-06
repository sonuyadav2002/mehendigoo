import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SupportScreen() {
  const supportOptions = [
    {
      title: "Chat with Us",
      icon: "chatbubble-ellipses-outline",
    },
    {
      title: "Call Us",
      icon: "call-outline",
    },
    {
      title: "FAQs",
      icon: "help-circle-outline",
    },
    {
      title: "Raise a Ticket",
      icon: "document-text-outline",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>

      <Text style={styles.subtitle}>How can we help you?</Text>

      <View style={styles.optionsContainer}>
        {supportOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <View style={styles.leftSection}>
              <Ionicons name={item.icon} size={20} color="#444" />

              <Text style={styles.optionText}>{item.title}</Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#999" />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
  },

  optionsContainer: {
    gap: 12,
  },

  optionItem: {
    height: 58,
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 12,
    paddingHorizontal: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  optionText: {
    marginLeft: 14,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
