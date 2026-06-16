import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = ["Bridal", "Engagement", "Arabic", "Festival", "Party"];

export default function AddServiceScreen({ navigation }) {
  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("Bridal");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAdd = () => {
    if (!serviceName.trim()) {
      Alert.alert("Missing", "Please enter service name.");
      return;
    }
    Alert.alert("Success", "Service added successfully!");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Service</Text>
          <View style={styles.empty} />
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Service Name</Text>
          <TextInput
            placeholder="e.g. Bridal Mehendi"
            placeholderTextColor="#999"
            value={serviceName}
            onChangeText={setServiceName}
            style={styles.input}
          />

          <Text style={styles.label}>Service Category</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.dropdownText}>{category}</Text>
            <Ionicons
              name={showDropdown ? "chevron-up" : "chevron-down"}
              size={18}
              color="#666"
            />
          </TouchableOpacity>
          {showDropdown && (
            <View style={styles.dropdownList}>
              {CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.dropdownItem,
                    cat === category && styles.dropdownItemActive,
                  ]}
                  onPress={() => {
                    setCategory(cat);
                    setShowDropdown(false);
                  }}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      cat === category && styles.dropdownItemTextActive,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text style={styles.label}>Price</Text>
          <View style={styles.priceRow}>
            <Text style={styles.currencyPrefix}>Ã¢â€šÂ¹</Text>
            <TextInput
              placeholder="5000"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
              style={styles.priceInput}
            />
          </View>

          <Text style={styles.label}>Duration (hours)</Text>
          <TextInput
            placeholder="e.g. 2"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
            style={styles.input}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder="Describe your service..."
            placeholderTextColor="#999"
            multiline
            value={description}
            onChangeText={setDescription}
            style={styles.textArea}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Add Service</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#F7146B";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  empty: {
    width: 40,
  },
  form: {
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 16,
    color: "#111",
  },
  input: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  dropdown: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  dropdownText: {
    fontSize: 15,
    color: "#111",
  },
  dropdownList: {
    marginTop: 6,
    backgroundColor: "#FFF",
    borderRadius: 14,
    overflow: "hidden",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },
  dropdownItemActive: {
    backgroundColor: "#FFF1F7",
  },
  dropdownItemText: {
    fontSize: 15,
    color: "#333",
  },
  dropdownItemTextActive: {
    color: PRIMARY,
    fontWeight: "600",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  currencyPrefix: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    paddingLeft: 16,
  },
  priceInput: {
    flex: 1,
    height: 56,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#111",
  },
  textArea: {
    height: 120,
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    textAlignVertical: "top",
    fontSize: 15,
    color: "#111",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  footer: {
    padding: 16,
    backgroundColor: "#FFF8FA",
  },
  addButton: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowColor: PRIMARY,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
