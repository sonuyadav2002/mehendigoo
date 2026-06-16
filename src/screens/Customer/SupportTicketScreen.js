import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = [
  "Booking Issue",
  "Payment Issue",
  "Artist Issue",
  "Other",
];

export default function SupportTicketScreen({ navigation }) {
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#1D1D1D" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Raise a Ticket</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Issue Category</Text>

            <View style={styles.categoryRow}>
              {CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.categoryChip,
                    category === cat && styles.categoryChipActive,
                  ]}
                  onPress={() => setCategory(cat)}
                >
                  <Text
                    style={[
                      styles.categoryChipText,
                      category === cat && styles.categoryChipTextActive,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Subject</Text>

            <TextInput
              style={styles.input}
              placeholder="Brief subject of your issue"
              placeholderTextColor="#CCC"
              value={subject}
              onChangeText={setSubject}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Description</Text>

            <TextInput
              style={styles.textarea}
              placeholder="Describe your issue in detail..."
              placeholderTextColor="#CCC"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.attachBtn}>
            <Ionicons name="image-outline" size={20} color="#F7146B" />

            <Text style={styles.attachBtnText}>Attach Image (Optional)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.submitBtn,
              (!category || !subject || !description) &&
                styles.submitBtnDisabled,
            ]}
            disabled={!category || !subject || !description}
          >
            <Ionicons name="send-outline" size={18} color="#FFF" />

            <Text style={styles.submitBtnText}>Submit Ticket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    fontWeight: "500",
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryChip: {
    height: 38,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryChipActive: {
    backgroundColor: "#F7146B",
    borderColor: "#F7146B",
  },
  categoryChipText: {
    fontSize: 13,
    color: "#888",
    fontWeight: "500",
  },
  categoryChipTextActive: {
    color: "#FFF",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111",
    backgroundColor: "#F2F4F7",
  },
  textarea: {
    height: 140,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 15,
    color: "#111",
    backgroundColor: "#F2F4F7",
  },
  attachBtn: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F7146B",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 24,
    backgroundColor: "#FFF8FA",
  },
  attachBtnText: {
    color: "#F7146B",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 8,
  },
  submitBtn: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
  },
  submitBtnDisabled: {
    opacity: 0.5,
  },
  submitBtnText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 8,
  },
});