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

const LABELS = ["Home", "Work", "Other"];

export default function AddNewAddressScreen({ navigation }) {
  const [selectedLabel, setSelectedLabel] = useState("Home");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

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

          <Text style={styles.headerTitle}>Add New Address</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.chipRow}>
            {LABELS.map((label) => (
              <TouchableOpacity
                key={label}
                style={[
                  styles.chip,
                  selectedLabel === label && styles.chipActive,
                ]}
                onPress={() => setSelectedLabel(label)}
              >
                <Ionicons
                  name={
                    label === "Home"
                      ? "home-outline"
                      : label === "Work"
                      ? "briefcase-outline"
                      : "location-outline"
                  }
                  size={16}
                  color={selectedLabel === label ? "#FFF" : "#888"}
                />

                <Text
                  style={[
                    styles.chipText,
                    selectedLabel === label && styles.chipTextActive,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Address</Text>

            <TextInput
              style={styles.textarea}
              placeholder="House/Flat no., Street, Area"
              placeholderTextColor="#CCC"
              value={address}
              onChangeText={setAddress}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>City</Text>

              <TextInput
                style={styles.input}
                placeholder="City"
                placeholderTextColor="#CCC"
                value={city}
                onChangeText={setCity}
              />
            </View>

            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>State</Text>

              <TextInput
                style={styles.input}
                placeholder="State"
                placeholderTextColor="#CCC"
                value={state}
                onChangeText={setState}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Pincode</Text>

            <TextInput
              style={styles.input}
              placeholder="123456"
              placeholderTextColor="#CCC"
              value={pincode}
              onChangeText={setPincode}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Landmark (Optional)</Text>

            <TextInput
              style={styles.input}
              placeholder="Nearby landmark"
              placeholderTextColor="#CCC"
              value={landmark}
              onChangeText={setLandmark}
            />
          </View>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save Address</Text>
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
  chipRow: {
    flexDirection: "row",
    marginBottom: 24,
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    backgroundColor: "#FFF",
  },
  chipActive: {
    backgroundColor: "#F7146B",
    borderColor: "#F7146B",
  },
  chipText: {
    fontSize: 14,
    color: "#888",
    fontWeight: "500",
    marginLeft: 6,
  },
  chipTextActive: {
    color: "#FFF",
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    fontWeight: "500",
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
    height: 90,
    borderWidth: 1,
    borderColor: "#E2E6ED",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 15,
    color: "#111",
    backgroundColor: "#F2F4F7",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  halfInput: {
    flex: 1,
    marginBottom: 18,
  },
  saveBtn: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#F7146B",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  saveBtnText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});